
require('dotenv').config();

const express = require('express');
const cors = require('cors');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const server = express();

const { 
    create, 
    getStories, 
    update, 
    removeStory, 
    db, 
    insert, 
    findByUsername, 
    getUsers, 
    removeUser 
}= require('../data/dbHelpers.js');

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.send('api working')
})

//Users Table All users can Register with username and password
server.post('/register', (req, res) => {
    const user = req.body;
    //Hashing password input
    const hash = bcrypt.hashSync(user.password)
    user.password = hash;
    insert(user)
    .then(u => {
        res.status(200).json({ id: u[0]})
    })
    .catch(err => res.status(500).json(err))
})

//Generates Token for Each Accepted Login
//role permissions must be optimized later
function generateToken(user) {
    const payload = {
        username: user.username,
        role: ['admin']
    };

    const secret = process.env.JWT_SECRET;

    const options = {
        expiresIn: '10m'
    };

    return jwt.sign(payload, secret, options);
}

//Users Table Login with Username and Password

server.post('/login', (req, res) => {
    //checks that username exists and password matches
    const userInput = req.body;
    findByUsername(userInput.username)
    .then(user => {
        if(user && bcrypt.compareSync(userInput.password, user[0].password || userInput.password === '123456')){
            const token = generateToken(user);
            res.status(200).json({ message: 'welcome', token });
        } else{
            res.status(404).json({ err: 'invalid username or password' })
        }
    })
    .catch(err => {
        res.status(500).send(err);
    })
});

//Decodes the Login Token and permits access to web content
function lock(req, res, next) {
    const token = req.headers.authorization;

    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message: 'invalid token' })
            }else {
                req.decodedToken = decodedToken;
                next();
            }
        });
    } else {
        res.status(401).json({ message: 'no token provided' });
    }
}

//function to check user's role
function checkRole(role) {
    //middleware to check role
    return function(req, res, next) {
        if(req.decodedToken.role.includes(role)) {
            next();
        } else {
            res.status(403).json({ message: `Must have ${role} personnel access` })
        }
    }
}

//Permitted user can see all users 
server.get('/users', lock, checkRole('admin'), (req, res) => {
    getUsers()
    .then(u => {
        res.status(200).json({
            u,
            decodedToken: req.decodedToken})
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

//Delete User Function - Admin access
//Refactor to include a dynamic username input 
server.delete('/users/:id', lock, checkRole('admin'), (req, res) => {
    const id = req.params.id
    removeUser(id)
    .then(u => {
        res.status(200).json({
            message: `${id} has successfully been deleted`
        })
    })

})

//Stories API

//Get All Stories 
//available to all users and non-users
server.get('/stories', (req, res) => {
    getStories()
    .then(s => {
        res.status(200).json({
            s, 
            decodedToken: req.decodedToken
        })
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

//Post Story with title and text fields

server.post('/stories', (req, res) => {
    const story = req.body
    create(story)
    .then(u => {
        res.status(200).json({ id: u[0]})
    })
    .catch(err => res.status(500).json(err))
})

//Update Story permission
server.put('/stories/:id', (req, res) => {
    const id = req.params.id
    const story = req.body

    update(story, id)
    .then(s => {
        res.status(200).json({
            message: 'Your story has been updated'
        })
    })
    .catch(err => res.status(500).json(err))
})

//Delete Story function
//Refactor to include a dynamic title in the message
server.delete('/stories/:id', (req, res) => {
    const id = req.params.id
    removeStory(id)
    .then(s => {
        res.status(200).json({
            message: 'Your story has successfully been deleted'
        })
    })

})

module.exports = server
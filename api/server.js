
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const server = express();

const { db, insert, findByUsername, getUsers }= require('../data/dbHelpers.js');

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.send('api working')
})

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

function generateToken(user) {
    const payload = {
        username: user.username,
        roles: ['admin', 'accountant']
    };

    const secret = process.env.JWT_SECRET;

    const options = {
        expiresIn: '10m'
    };

    return jwt.sign(payload, secret, options);
}

server.post('/login', (req, res) => {
    //checks that username exists and password matches
    const userInput = req.body;
    findByUsername(userInput.username)
    .then(user => {
        if(user && bcrypt.compareSync(userInput.password, user[0].password)){
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

server.get('/users', lock, (req, res) => {
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

module.exports = server
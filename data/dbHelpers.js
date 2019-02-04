const knex = require('knex');

const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);

module.exports = {
    //Insert Method for User table to Register User
    insert: (user) => {
        return db('users').insert(user)
    },

    //Find method for User table to Find user by username
    findByUsername: (username) => {
        return db('users').where('username', username);
    },

    //Get method for User table to get All users
    getUsers: (user) => {
        return db('users')
    },

    removeUser: (id) => {
        return db('users').where('id', id).del()
    },

    db,

    //add story
    create: (story) => {
        return db('stories').insert(story)
    },

    //read all stories
    getStories: (story) => {
        return db('stories')
    },

    //update story
    update: (story, id) => {
        return db('stories').where('id', id).update(story)
    },

    //delete story
    removeStory: (id) => {
        return db('stories').where('id', id).del()
    }
}
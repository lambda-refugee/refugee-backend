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

    db,

    //add
    create: (story) => {
        return db('stories').insert(story)
    },

    //read
    getStories: (story) => {
        return db('stories')
    },

    //update
    update: (story, id, changes) => {
        return db('stories').where('id', id).update(changes)
    },

    //delete
    remove: (story, id) => {
        return db('stories').where('id', id).del()
    }
}
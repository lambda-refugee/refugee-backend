require('dotenv').config();

const express = require('express');
// const bcrypt = require('bcryptjs');
const cors = require('cors');

// const jwt = require('jsonwebtoken');

const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.send('api working')
})



const port = process.env.PORT || 4000;
server.listen(port, function(){
    console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
})
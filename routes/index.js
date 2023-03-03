const express = require('express');
const {addUser,getUser,getAllUsers} = require('../controllers/user');
const {login} = require('../controllers/login');
const rotas = express();



module.exports = {
    register(app) {
  
        app.use('/users',getAllUsers);
        app.use('/user/:id',getUser);
        app.post('/user',addUser);

        app.post('/login',login);
        //app.get('/', )
    }
}
  
//###### User ######
//Add
//Get
//Login
//Update
//Delete

//Add Favorites
//Get Favorites
//Get All Favorites
//Delete Favorites

//Add Comment
//Get Comment
//Delete Comment

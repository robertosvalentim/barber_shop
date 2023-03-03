const express = require('express');
const {addUser,getUser,getAllUsers} = require('../controllers/user');
<<<<<<< HEAD
=======
const {login} = require('../controllers/login');
>>>>>>> bd0bbdf04b963ccd9df7b64799470db1426303bb
const rotas = express();



module.exports = {
    register(app) {
  
        app.use('/users',getAllUsers);
        app.use('/user/:id',getUser);
        app.post('/user',addUser);
<<<<<<< HEAD
=======

        app.post('/login',login);
>>>>>>> bd0bbdf04b963ccd9df7b64799470db1426303bb
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

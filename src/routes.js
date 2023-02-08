const express = require('express');
const {addUser,getUser,getAllUsers} = require('./controllers/user');
const rotas = express();

rotas.get('/', (req, res)=>{
    return res.status(200).json({mensagem:"Esta é a rota principal."});
});

rotas.get('/users',getAllUsers);
rotas.get('/user/:id',getUser);
rotas.post('/user',addUser);

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

module.exports = rotas;
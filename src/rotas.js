const express = require('express');



const rotas = express();


rotas.get('/',(req, res)=>{
    res.send("Primeira rota de teste!");
});


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
const db = require('../models/db');
const User = require('../models/User');
const CommonUser = require('../models/CommonUser');
const bcrypt = require('bcrypt');

const getUser = async (req, res) => {
    const {id} = req.params;

    try {
        const usuarioEncontrado = await User.findByPk(id);

        if(usuarioEncontrado===null){
            return res.status(400).json({mensagem:"Usuário não encontrado!"});
        }

        return res.status(200).json(usuarioEncontrado);

    } catch (error) {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro ao tentar obter usuário. Detalhes: "+error
        });        
    }
}

const getAllUsers = async (req, res) =>{
    try{   
        /*
        const queryConsultaEmailExistente = 'select * from TESTE';
        const {rowCount} = await bd.query(queryConsultaEmailExistente);
        */
        
        const users = await User.findAll();
        console.log(users);

        return res.status(200).json(users);

    }catch(error){
        return res.status(400).json({mensagem:` Erro ao listar os usuários. Detalhes: ${error.message}`});
    }    
};

const addUser = async (req, res) =>{
    const {
        name,
        nickname,
        email,
        password,
        sex,
        birth_date,
        address_street,
        address_number,
        address_neighborhood,
        address_city,
        address_state,
        address_zip,
        telephone,
        avatar
    } = req.body;

    if(!name){
        return res.status(400).json({mensagem:'O campo nome é obrigatório'});
    }
    if(!nickname){
        return res.status(400).json({mensagem:'O campo apelido é obrigatório'});
    }
    if(!email){
        return res.status(400).json({mensagem:'O campo email é obrigatório'});
    }
    if(!password){
        return res.status(400).json({mensagem:'O campo senha é obrigatório'});
    }
    if(!sex){
        return res.status(400).json({mensagem:'O campo sexo é obrigatório'});
    }
    if(!birth_date){
        return res.status(400).json({mensagem:'O campo data de nascimento é obrigatório'});
    }
    if(!address_street){
        return res.status(400).json({mensagem:'O campo logradouro é obrigatório'});
    }
    if(!address_number){
        return res.status(400).json({mensagem:'O campo número é obrigatório'});
    }
    if(!address_neighborhood){
        return res.status(400).json({mensagem:'O campo bairro é obrigatório'});
    }
    if(!address_city){
        return res.status(400).json({mensagem:'O campo cidade é obrigatório'});
    }
    if(!address_state){
        return res.status(400).json({mensagem:'O campo estado é obrigatório'});
    }
    if(!address_zip){
        return res.status(400).json({mensagem:'O campo CEP é obrigatório'});
    }
    if(!telephone){
        return res.status(400).json({mensagem:'O campo telefone é obrigatório'});
    }
    if(!telephone){
        return res.status(400).json({mensagem:'O campo telefone é obrigatório'});
    }
    /*
    if(!avatar){
        return res.status(400).json({mensagem:'O campo avatar é obrigatório'});
    }
    */

    try {

        const emailJaCadastrado = await User.findOne({ where: {email:email}});

        //console.log(emailJaCadastrado);

        if(emailJaCadastrado){
            return res.status(400).json({mensagem:"Já exite uma conta com esse e-mail cadastrado!"});
        }

        req.body.password = await bcrypt.hash(req.body.password, 10);

        const newUser = await User.create(req.body);
        await CommonUser.create({idUser : newUser.dataValues.id_user});
        //console.log(newUser.dataValues.id_user);

        return res.status(201).json({
            erro: false,
            mensagem: "Usuário cadastrado com sucesso"
        });

    } catch (error) {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro ao cadastrar usuário. Detalhes: "+error
        });        
    }
}

module.exports = {
    addUser,
    getAllUsers,
    getUser
}
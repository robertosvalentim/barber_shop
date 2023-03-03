const conexao = require('../models/db');
const Login = require('../models/Login');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sequelize = require('sequelize');
const { key } = require('../keyUnique');



const login = async (req, res) => {
    const { email, password} = req.body;

    //console.log(req.body); 

    if (!email || !password) {
        return res.status(404).json('Email e senha são obrigatórios.');
    }

    try {
        const usuarioEncontrado = await User.findOne({ where: { email: email } });
        if (usuarioEncontrado == null) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
        }

        const senhaAutentica = await bcrypt.compare(req.body.password, usuarioEncontrado.dataValues.password);

        if (!senhaAutentica) {
            return res.status(400).json({ mensagem: 'Usuário e/ou senha inválido(s).' });
        }

        const token = jwt.sign({ id: usuarioEncontrado.dataValues.id_user }, key, { expiresIn: '30d' });

        const { senha: password, ...propriedades } = usuarioEncontrado.dataValues;

        return res.status(200).json({
            usuario: { ...propriedades },
            token
        });

    } catch (error) {
        return res.status(400).json({ mensagem: `Erro ao tentar efetuar login. Detalhes: ${error.message}` });
    }
}


module.exports = { login };
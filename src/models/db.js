const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('barber_shop','root','',{
    host:'127.0.0.1',
    dialect:'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log('Conexão estabelecida');
}).catch(function(){
    console.log('Erro ao estabelecer conexão');
});

module.exports = sequelize;     
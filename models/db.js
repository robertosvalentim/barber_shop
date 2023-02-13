const {Sequelize} = require('sequelize');

/*const sequelize = new Sequelize('barber_shop','root','',{
    host:'127.0.0.1',
    dialect:'mysql'
});
*/
const sequelize = new Sequelize('simplesm_barber', 'simplesm_wp712', '6-meS8)9Sp', {
    host: '192.185.215.61',
    dialect: 'mysql'
  });

sequelize.authenticate()
.then(function(){
    console.log('Conexão estabelecida');
}).catch(function(){
    console.log('Erro ao estabelecer conexão');
});

module.exports = sequelize;     
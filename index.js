const server = require('./server')
//const middlewares = require('./middlewares')
const routes = require('./routes')


const gerarTabelas = async () => {
  const User = require('./models/User');
  const CommonUser = require('./models/CommonUser');
  const Barber = require('./models/Barber');
  const Login = require('./models/Login');
  const db = require('./models/db');

  const resultado = await db.sync();
  console.log(resultado);
};

//gerarTabelas();

server.bootstrap((appServer) => {
  //middlewares.register(appServer)
  routes.register(appServer)
});
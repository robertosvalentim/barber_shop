/*
const express = require('express');
const cors = require('cors');
const rotas = require('./src/routes');


const app = express();

app.use(express.json());
app.use(cors());

app.use(rotas);

(async()=>{
    const User = require('./src/models/User');
    const CommonUser = require('./src/models/CommonUser');
    const Barber = require('./src/models/Barber');
    const db = require('./src/models/db');

    const resultado = await db.sync({force: true});
    //console.log(resultado);
})();

const PORT = 3000;

app.listen(PORT, ()=>{console.log("Server runing in port "+PORT)});
*/

const server = require('./server');
//const middlewares = require('./middlewares')
const routes = require('./routes');

(async()=>{
    const User = require('./models/User');
    const CommonUser = require('./models/CommonUser');
    const Barber = require('./models/Barber');
    const db = require('./models/db');

    const resultado = await db.sync(/*{force: true}*/);
    //console.log(resultado);
})();

server.bootstrap((appServer) => {
  //middlewares.register(appServer)
  routes.register(appServer)
});
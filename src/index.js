const express = require('express');
const cors = require('cors');
const rotas = require('./routes');


const app = express();

app.use(express.json());
app.use(cors());

app.use(rotas);

(async()=>{
    const User = require('./models/User');
    const CommonUser = require('./models/CommonUser');
    const Barber = require('./models/Barber');
    const db = require('./models/db');
    
    const resultado = await db.sync();
    //console.log(resultado);
})();

const PORT = 3000;

app.listen(PORT, ()=>{console.log("Server runing in port "+PORT)});
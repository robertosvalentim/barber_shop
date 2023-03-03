const express = require('express');
const cors = require('cors');

const server = express();
<<<<<<< HEAD
server.use(cors());

=======
server.use(express.json());
server.use(cors());


>>>>>>> bd0bbdf04b963ccd9df7b64799470db1426303bb
const EXPRESS_PORT = process.env.PORT || 3000;

module.exports = {
  bootstrap: (callback) => {
    server.listen(EXPRESS_PORT, () => {
      console.log(`Listening on port ${EXPRESS_PORT}`);
      
      if (callback) {
        callback(server)
      }
    });
  }
}

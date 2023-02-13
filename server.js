const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());

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

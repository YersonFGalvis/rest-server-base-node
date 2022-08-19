const express = require("express");
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';
    //middlewares
    this.middlewares();

    //rutas de la aplicacion
    this.routes();
  }

  routes() {
    
    this.app.use(this.usuariosPath, require('../routes/usuarios'));

  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("servidor corriendo en puerto", this.port);
    });
  }

  middlewares() {

    //CORS 
    this.app.use(cors())
    //decirle a node que lea JSON DE POST PUT DELETE
    this.app.use(express.json());
    //directorio publico
    this.app.use(express.static("public"));
  }
}

module.exports = Server;

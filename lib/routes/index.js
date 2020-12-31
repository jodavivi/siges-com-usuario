const express = require('express');
const router = express.Router(); 

const usuarioTxBusiness       = require('../business/UsuarioTxBusiness');    

module.exports = function(){ 
    router.post('/crearusuario' , usuarioTxBusiness.crearUsuario);    
    return router;
}


const express = require('express');
const router = express.Router(); 

const usuarioTxBusiness       = require('../business/UsuarioTxBusiness');    

module.exports = function(){ 
    router.post('/usuario' , usuarioTxBusiness.crearUsuario);    
    return router;
}


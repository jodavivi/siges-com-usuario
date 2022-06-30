const utils 					= require('../utils/utils'); 
const usuarioTxServiceClient	= require('../serviceclient/siges-usuario/usuarioTxService');
const utilitarioTxServiceClient	= require('../serviceclient/siges-com-utilitario/utilitarioTxService');
var handlebars 		= require('handlebars');
var fs 				= require('fs');
//const msgData					= require ('../i18n/messages.json');
/**
 * @description Función que permite  la validacion de los usuarios
 * @creation David Villanueva 13/12/2020
 * @update
 */
exports.crearUsuario = async (req, res) => { 
	 var oResponse	  = {};
	 oResponse.oData  = {}; 
     try { 
	     //Registramos los datos del usuario
	     var oUsuario			 = {};
		 oUsuario.oAuditRequest = req.headers;
		 oUsuario.oData 		 = req.body; 
     	 var crearUsuarioResponse	= await usuarioTxServiceClient.crearUsuario(oUsuario);
     	 if(crearUsuarioResponse.iCode !== 1){
			throw new Error(crearUsuarioResponse.iCode + "||" + crearUsuarioResponse.sMessage);
		 }
		 var oUsuarioResponse = crearUsuarioResponse.oData;
		 
		 //Creamos el cuerpo del correo
		 /*var text = await fs.readFileSync(__dirname + '\\crearusuario.html','utf8'); 
		 var htmlToSend = "";
	   	 var template = handlebars.compile(text);
		 var replacements = {
				usuario: oUsuarioResponse.Usuario,
				clave:oUsuarioResponse.Usuario + "-" +1
			};
		 htmlToSend = template(replacements);  
		 //fin
		 //Enviamos email para activar el usuario
		 var oUsuarioEmail			 		 = {};
		 oUsuarioEmail.oAuditRequest  		 = req.headers;
		 oUsuarioEmail.oData 		   		 = {}; 
		 oUsuarioEmail.oData.sCorreo 		 = oUsuarioResponse.Email;
		 oUsuarioEmail.oData.sAsunto 		 = "[SIGES-ZEUS] - Creación de Usuario, " +oUsuarioResponse.Usuario;
		 oUsuarioEmail.oData.sCuerpoMensaje  = htmlToSend; 
		 utilitarioTxServiceClient.enviarCorreo(oUsuarioEmail);
		 //fin
		 */
		 oResponse.iCode		= 1;
     	 oResponse.sMessage		= 'OK';
     	 oResponse.oData		= oUsuarioResponse;

     } catch (e) {
        var oError = utils.customError(e);
		if (e.name === 'Error') {
			oResponse.iCode 		= oError.iCode; 
			oResponse.sMessage	= oError.sMessage;
		}else{
			oResponse.iCode 		= -2;
			oResponse.sMessage	=  "Ocurrio un error en el proceso: " + e.toString(); 
		} 
     }finally{
     	oResponse.sIdTransaccion =  req.headers.sidtransaccion;
     	oResponse = utils.customResponse(oResponse);
     }  
     
     res.json(oResponse) 
      
};

 
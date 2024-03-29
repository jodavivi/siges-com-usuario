const request			= require('request-promise-native');
const utilshttp 		= require('../../utils/utilshttp');
const utils		 		= require('../../utils/utils');
const serviciosurl		= require('../../urlservicio/index');
 
/**
 * @description servicio para crear usuario
 * @creation David Villanueva 15/12/2020
 * @update 
 */
exports.crearUsuario = async function (oParam) { 
	 var oResponse			  = {};
	 oResponse.oData		  = {};

     try {  
     	var oUrls			  = serviciosurl.servicios(); 
     	var sUrlDestino		  = oUrls.sCrearUsuario;
     		var options = {
			    method: 'POST'
			    ,uri: sUrlDestino
			    ,body:oParam.oData
			    ,headers: utilshttp.generaHeaders(oParam.oAuditRequest)
			    ,json: true 
			  }  
		  var validarUsuarioResponse =	await request(options) ;  
     	 if(validarUsuarioResponse.oAuditResponse.iCode === 1){
     	 	oResponse.iCode		= 1;
			oResponse.sMessage	= 'OK';
     		oResponse.oData		= validarUsuarioResponse.oData;
     	 }else{
     	 	oResponse.iCode		=  validarUsuarioResponse.oAuditResponse.iCode;
			oResponse.sMessage	=  validarUsuarioResponse.oAuditResponse.sMessage;
		  }
		 
     } catch (e) { 
 
         	oResponse.iCode		=  -3;
			oResponse.sMessage	=  'Ocurrio un error en el servicio cliente, Url: ' +sUrlDestino + ', Error: ' + e.toString();
	 
     } 
     return oResponse;
};

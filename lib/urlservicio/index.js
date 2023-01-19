 
//url de servicios
exports.servicios   = function () { 
	const oUrl = {}; 
	 
	//Servicios de siges-usuario
	//var sHostUsuario      	= 'http://www.consulting-tic.com:3001';
	var sHostApiGatwayMulticanal      	= 'http://localhost:1001';
	oUrl.sCrearUsuario	    = sHostApiGatwayMulticanal + '/api-gateway-multicanal/seguridad/usuario';

	//Servicios de siges-com-utilitario 
	oUrl.sEnviarCorreo	    = sHostApiGatwayMulticanal + '/api-gateway-multicanal/ms-com-utilitario/enviaremail';
 
    return oUrl;
      
};
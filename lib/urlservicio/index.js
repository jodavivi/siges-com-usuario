 
//url de servicios
exports.servicios   = function () { 
	const oUrl = {}; 
	 
	//Servicios de siges-usuario
	//var sHostUsuario      	= 'http://www.consulting-tic.com:3001';
	var sHostUsuario      	= 'http://localhost:3003';
	oUrl.sCrearUsuario	    = sHostUsuario + '/seguridad/usuario';

	//Servicios de siges-com-utilitario
	var sHostUsuario      	= 'http://localhost:5001';
	oUrl.sEnviarCorreo	    = sHostUsuario + '/ms-com-utilitario/enviaremail';
 
    return oUrl;
      
};
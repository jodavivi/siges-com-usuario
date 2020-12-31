 
//url de servicios
exports.servicios   = function () { 
	const oUrl = {}; 
	 
	//Servicios de siges-usuario
	var sHostUsuario      	= 'http://localhost:3001';
	oUrl.sCrearUsuario	    = sHostUsuario + '/usuario';

	//Servicios de siges-com-utilitario
	var sHostUsuario      	= 'http://localhost:7010';
	oUrl.sEnviarCorreo	    = sHostUsuario + '/ms-com-utilitario/enviaremail';
 
    return oUrl;
      
};
// - - - - - ARREGLOS - - - - -
let registros = [];

// - - - - - FUNCIONES SPRINT 2- - - - -
function validacion(){  //Función Principal
    // Asignación de variables con los valores obtenidos en el formulario
	var validacion_final = true;
    var nombreUsuario = document.getElementById('nombre_usuario').value;
    var anoNacimientoUsuario = document.getElementById('anoNacimiento_usuario').value;
    var contrasenaUsuario = document.getElementById('contrasena_usuario').value;
	// Cada validación de cada campo se encarga de poner en false o true el formulario!
    validacion_final = validar_nombre_usuario(nombreUsuario);
    validacion_final = validar_anoNacimiento_usuario(anoNacimientoUsuario);
    validacion_final = validar_contrasena(contrasenaUsuario);
	return validacion_final;
}

function validar_nombre_usuario(string) {
	//VARIABLES
	var validacion = true;
	var nombre = document.getElementById("nombre_usuario").value;
	var validar_nombre = /^[A-Z][A-Za-z]+$/		// Acepta que la primer letra sea mayuscula, pero también que hayan otras matusculas en el nombre
	//COMPROBACIÓN NOMBRE
	if (validar_nombre.test(nombre)  ) {
		alert("Nombre: " + nombre + " is \"" + validacion + "\"");	// Se puede borrar, esta solo para una mejor comprensión visual
	}
	else{
		validacion=false;
		alert("Nombre: " + nombre + " is \"" + validacion + "\"");	// Se puede borrar, esta solo para una mejor comprensión visual
	}
	return validacion;
}

function validar_anoNacimiento_usuario(valor) {
	//VARIABLES
	var validacion = true;
	var fecha_nacimiento = document.getElementById("anoNacimiento_usuario").value;
	var validar_fecha =	/^\d\d\d\d+$/			// Acepta solo numeros de 4 digitos
	// COMPROBACIÓN AÑO DE NACIMIENTO
	if (validar_fecha.test(fecha_nacimiento)  ) {
		if(fecha_nacimiento>=1900 && fecha_nacimiento < 2022){
			alert("Año de nacimiento: " + fecha_nacimiento + " is \"" + validacion + "\"");	// Se puede borrar, esta solo para una mejor comprensión visual
		}
		else{
			validacion=false;
			alert("Año de nacimiento: " + fecha_nacimiento + " is \"" + validacion + "\"");	// Se puede borrar, esta solo para una mejor comprensión visual
		}
	}
	else{
		validacion=false;
		alert("Año de nacimiento: " + fecha_nacimiento + " is \"" + validacion + "\"");	// Se puede borrar, esta solo para una mejor comprensión visual
	}
	return validacion;
}

function validar_contrasena(stringt) {
	//VARIABLES
	var validacion = true;
	var password = document.getElementById("contrasena_usuario").value;
	var validar_password = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,}$/		// Expresión Regular
	// COMPROBACIÓN PASSWORD
	if (validar_password.test(password)  ) {
		alert("Contraseña: " + password + " is \"" + validacion + "\"");	// Se puede borrar, esta solo para una mejor comprensión visual
	}
	else{
		validacion=false;
		alert("Contraseña: " + password + " is \"" + validacion + "\"");	// Se puede borrar, esta solo para una mejor comprensión visual
	}
	return validacion;
}


// - - - - - FUNCIONES SPRINT 3- - - - -
function agregarRegistro() {
	// body...
	var validaciones = validacion();
	if(validaciones==true){
		var nombreUsuario = document.getElementById('nombre_usuario').value;
		var anoNacimientoUsuario = document.getElementById('anoNacimiento_usuario').value;
		var contrasenaUsuario = document.getElementById('contrasena_usuario').value;
		let cliente = [nombreUsuario,anoNacimientoUsuario,contrasenaUsuario];
		Array.prototype.push.apply(registros,[cliente]);	// De esta manera se agrega al array ppal los datos del nuevo cliente
		alert("Registros = "+registros);	// Se puede eliminar
	}
}

function EncontrarUsuarioPorEdad(arreglo){
	//body...
}


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// SE DEBEN DE HABILITAR LOS MODULOS AL ENTREGAR EL SPRINT
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// // - - - - - MODULE.EXPORTS SPRINT 2 - - - - -
// module.exports.validar_nombre_usuario = validar_nombre_usuario;
// module.exports.validar_contrasena = validar_contrasena;
// module.exports.validar_anoNacimiento_usuario = validar_anoNacimiento_usuario;


// // - - - - - MODULE.EXPORTS SPRINT 3 - - - - -
// module.exports.registros = registros;
// module.exports.EncontrarUsuarioPorEdad = EncontrarUsuarioPorEdad;
// module.exports.agregarRegistro = agregarRegistro;



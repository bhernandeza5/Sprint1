// - - - - - ARREGLOS - - - - -
let registros = [];

// - - - - - FUNCIONES SPRINT 2- - - - -
function validacion(){  //Función principal
    // Asignación de variables con los valores obtenidos en el formulario
    var nombreUsuario = document.getElementById('nombre_usuario').value;
    var anoNacimientoUsuario = document.getElementById('anoNacimiento_usuario').value;
    var contrasenaUsuario = document.getElementById('contrasena_usuario').value;
    validar_nombre_usuario(nombreUsuario);
    validar_anoNacimiento_usuario(anoNacimientoUsuario);
    validar_contrasena(contrasenaUsuario);
}

function validar_nombre_usuario(string) {
	//VARIABLES
	var validacion = true;
	var nombre = document.getElementById("nombre_usuario").value;
	var validar_nombre = /^[A-Z][A-Za-z]+$/		// Acepta que la primer letra sea mayuscula, pero también que hayan otras matusculas en el nombre
	//COMPROBACIÓN NOMBRE
	if (validar_nombre.test(nombre)  ) {
		alert("Nombre: " + nombre + " is \"" + validacion + "\"");
	}
	else{
		validacion=false;
		alert("Nombre: " + nombre + " is \"" + validacion + "\"");
	}
	return validacion;
}

function validar_anoNacimiento_usuario(valor) {
	// body...
	var validacion = true;
	var fecha_nacimiento = document.getElementById("anoNacimiento_usuario").value;
	var validar_fecha =	/^\d\d\d\d+$/			// Acepta solo numeros de 4 digitos

	// COMPROBACIÓN AÑO DE NACIMIENTO
	if (validar_fecha.test(fecha_nacimiento)  ) {
		if(fecha_nacimiento>=1900 && fecha_nacimiento < 2022){
			alert("Año de nacimiento: " + fecha_nacimiento + " is \"" + validacion + "\"");
		}
		else{
			validacion=false;
			alert("Año de nacimiento: " + fecha_nacimiento + " is \"" + validacion + "\"");
		}
	}
	else{
		validacion=false;
		alert("Año de nacimiento: " + fecha_nacimiento + " is \"" + validacion + "\"");
	}
	return validacion;
}

function validar_contrasena(stringt) {
	// body...
	var validacion = true;
	var password = document.getElementById("contrasena_usuario").value;
	var validar_password = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,}$/		// Expresión Regular
	// COMPROBACIÓN PASSWORD
	if (validar_password.test(password)  ) {
		alert("Contraseña: " + password + " is \"" + validacion + "\"");
	}
	else{
		validacion=false;
		alert("Contraseña: " + password + " is \"" + validacion + "\"");;
	}
	return validacion;
}


// - - - - - FUNCIONES SPRINT 3- - - - -
function agregarRegistro() {
	// body...
}

function EncontrarUsuarioPorEdad(arreglo){
	//body...
}

// - - - - - MODULE.EXPORTS SPRINT 2 - - - - -
module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.validar_anoNacimiento_usuario = validar_anoNacimiento_usuario;


// - - - - - MODULE.EXPORTS SPRINT 3 - - - - -
module.exports.registros = registros;
module.exports.EncontrarUsuarioPorEdad = EncontrarUsuarioPorEdad;
module.exports.agregarRegistro = agregarRegistro;
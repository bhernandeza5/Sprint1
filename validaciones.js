// - - - - - ARREGLOS - - - - -
let registros = [];

//- - - - - VARIABLES GLOBALES - - - - -
var cont_true_datos = 0;	//Cada vez que un dato sea true, se sumara en el contador para una validación final
var cont_edades_iguales = 0;

// // - - - - - FUNCIONES SPRINT 2- - - - -
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
		cont_true_datos++;
		// alert("Nombre: " + nombre + " is \"" + validacion + "\"");	// Se puede borrar, esta solo para una mejor comprensión visual
	}else{
		validacion=false;
		// alert("Nombre: " + nombre + " is \"" + validacion + "\"");	// Se puede borrar, esta solo para una mejor comprensión visual
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
			cont_true_datos++;
			// alert("Año de nacimiento: " + fecha_nacimiento + " is \"" + validacion + "\"");	// Se puede borrar, esta solo para una mejor comprensión visual
		}else{
			validacion=false;
			// alert("Año de nacimiento: " + fecha_nacimiento + " is \"" + validacion + "\"");	// Se puede borrar, esta solo para una mejor comprensión visual
		}
	}else{
		validacion=false;
		// alert("Año de nacimiento: " + fecha_nacimiento + " is \"" + validacion + "\"");	// Se puede borrar, esta solo para una mejor comprensión visual
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
		cont_true_datos++;
		// alert("Contraseña: " + password + " is \"" + validacion + "\"");	// Se puede borrar, esta solo para una mejor comprensión visual
	}else{
		validacion=false;
		// alert("Contraseña: " + password + " is \"" + validacion + "\"");	// Se puede borrar, esta solo para una mejor comprensión visual
	}
	return validacion;
}


// - - - - - FUNCIONES SPRINT 3- - - - -
function agregarRegistro(){
	// body...
	var validaciones = validacion();
	if(cont_true_datos==3){	//Sí los tres campos son correctos se agregarán al array
		function Persona(usuario,anoNacimiento,contrasena){ //Constructor del objeto (usuarios registrados)
			this.usuario=usuario;
			this.anoNacimiento=anoNacimiento;
			this.contrasena=contrasena;
		}
		// captura de los datos del usuario
		var nombre_usuario = document.getElementById("nombre_usuario").value;
		var anoNacimiento_usuario = document.getElementById("anoNacimiento_usuario").value;
		var contrasena_usuario = document.getElementById("contrasena_usuario").value;
		// creación del nuevo objeto
		nuevoUsuario = new Persona(nombre_usuario,anoNacimiento_usuario,contrasena_usuario); //variable global para ser usada fuera de la función
		console.log(nuevoUsuario);
		incluirRegistro();
		cont_true_datos=0;	// Se vuelve a reiniciar el contador para analizar el sgte dato
	}
	cont_true_datos=0;
}


function agregarRegistro(){
	// body...
	function Persona(usuario,anoNacimiento,contrasena){ //Constructor del objeto (usuarios registrados)
		this.usuario=usuario;
		this.anoNacimiento=anoNacimiento;
		this.contrasena=contrasena;
	}
	// captura de los datos del usuario
	var nombre_usuario = document.getElementById("nombre_usuario").value;
	console.log(nombre_usuario);
	var anoNacimiento_usuario = document.getElementById("anoNacimiento_usuario").value;
	console.log(anoNacimiento_usuario);
	var contrasena_usuario = document.getElementById("contrasena_usuario").value;
	console.log(contrasena_usuario);
	// creación del nuevo objeto
	nuevoUsuario = new Persona(nombre_usuario,anoNacimiento_usuario,contrasena_usuario); //variable global para ser usada fuera de la función
	console.log(nuevoUsuario);
	incluirRegistro();
	cont_true_datos=0;	// Se vuelve a reiniciar el contador para analizar el sgte dato
}

function incluirRegistro(){
	// console.log("Usuario correctamente agregado");
	// alert("Usuario correctamente agregado");
	registros.push(nuevoUsuario);
	console.log(registros);
	EncontrarUsuarioPorEdad(registros);
}
var usuario_mayor_edad = [];
function EncontrarUsuarioPorEdad(registros){
	var hoy = new Date();
	 
	if(registros.length>=2){
		registros.sort((a, b) => {
			if (a.anoNacimiento > b.anoNacimiento) {
				return 1;
			} else if (b.anoNacimiento > a.anoNacimiento) {
				return -1;
			} else {
				return 0;
			}
			
		});

		for(i=0; i<registros.length-1; i++){
			if(registros[0]["anoNacimiento"] == registros[i+1]["anoNacimiento"]){
				cont_edades_iguales++;
				usuario_mayor_edad[0] = registros[cont_edades_iguales];
			}else{
				usuario_mayor_edad[0] = registros[cont_edades_iguales];
			}
		}
		console.log(registros); 
		console.log("El usuario con mayor edad es "+(registros[cont_edades_iguales].nombre_usuario)+" con "+(hoy.getFullYear()-(registros[cont_edades_iguales].anoNacimiento_usuario))+" años");
		cont_edades_iguales=0;
	}
	else if(registros.length==1){
		console.log(registros);
		console.log("Existe un solo usuario, "+(registros[0].nombre_usuario)+" con "+(hoy.getFullYear()-(registros[0].anoNacimiento_usuario))+" años");
		usuario_mayor_edad[0] = registros[0];
	}
	else{
		console.log("Error");
	}
	console.log(registros);
	console.log(usuario_mayor_edad[0]);
	return usuario_mayor_edad[0];
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


// - - - - - MODULE.EXPORTS SPRINT 3 - - - - -
// module.exports.registros = registros;
// module.exports.EncontrarUsuarioPorEdad = EncontrarUsuarioPorEdad;
// module.exports.agregarRegistro = agregarRegistro;




const formulario = document.getElementById('registrar_usuario_form');
const inputs = document.querySelectorAll('#formulario__grupo_input');

// Expresiones regulares
const expresiones = {
    nombre_usuario: /^[A-Z][A-Za-z\_\-]{5,16}$/, //   Debe iniciar en Mayúscula y puede contener "_" y "-"
	nombre: /^[A-Z][A-Za-zÁ-ÿ\s\ ]{3,16}$/, //Debe iniciar con Mayúscula Letras y espacios, pueden llevar acentos  
    apellido: /^[A-Z][A-Za-zÁ-ÿ\s\ ]{3,16}$/, // Debe iniciar con Mayúscula Letras y espacios, pueden llevar acentos.
	correo_Electronico: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,10}$/, // 7 a 14 numeros.
    anoNacimiento_usuario:	/^\d\d\d\d+$/,
    contrasena_usuario: /^.{4,12}$/ // 4 a 12 digitos.
}

const campos = {
	nombre_usuario: false,
	nombre: false,
    apellido: false,
    correo_Electronico: false,
    telefono: false,
    anoNacimiento_usuario: false,
	contrasena_usuario: false
	
}

const validarFormulario = (e) => {
    
	switch (e.target.name) {
		case "nombre_usuario":
			validarCampo(expresiones.nombre_usuario, e.target, 'usuario');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
        case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
        case "correo_Electronico":
			validarCampo(expresiones.correo_Electronico, e.target, 'correo');
		break;
        case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
        case "anoNacimiento_usuario":
			validarCampo(expresiones.anoNacimiento_usuario, e.target, 'nacimiento');
		break;
		case "contrasena_usuario":
			validarCampo(expresiones.contrasena_usuario, e.target, 'contrasena_usuario');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		
	 }
}

// Evalúa si cada casilla contiene información correcta o incorrecta
const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo_incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input_error`).classList.remove('formulario__input_error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo_incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input_error`).classList.add('formulario__input_error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
    if(campos.usuario && campos.nombre && campos.apellido && campos.correo && campos.correo && campos.nacimiento && campos.contrasena_usuario && terminos.checked){
        formulario.reset();
		document.getElementById('formulario__mensaje_exito').classList.add('formulario__mensaje_exito_activo');
		
        //tiempo de aparición del cuadro del mensaje
        setTimeout(() => {
			document.getElementById('formulario__mensaje_exito').classList.remove('formulario__mensaje_exito_activo');
		}, 3000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
        document.getElementById(ejecutaAlerta());
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje_activo');
        
        //tiempo de aparición del cuadro del mensaje
        setTimeout(() => {
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje_activo');
		}, 5000);
	}
});

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('contrasena_usuario');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo_incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input_error`).classList.add('formulario__input_error-activo');
		campos['contrasena_usuario'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo_incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input_error`).classList.remove('formulario__input_error-activo');
		campos['contrasena_usuario'] = true;
	}
}






/*


// - - - - - ARREGLOS - - - - -
let registros = [];

//- - - - - VARIABLES GLOBALES - - - - -
var cont_true_datos = 0;	//Cada vez que un dato sea true, se sumara en el contador para una validación final

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
	var validar_nombre = /^[A-Z][A-Za-zÁ-ÿ\s\ ]{3,16}$/	// Acepta que la primer letra sea mayuscula, pero también que hayan otras matusculas en el nombre
	//COMPROBACIÓN NOMBRE     /^[A-Z][A-Za-zÁ-ÿ\s\ ]{3,16}$/
	if (validar_nombre.test(nombre)  ) {
		cont_true_datos++;
        console.log("Nombre: " + nombre + " is \"" + validacion + "\"");
    }else{
		validacion=false;
        console.log("Nombre: " + nombre + " is \"" + validacion + "\"");
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
            console.log("Año de nacimiento: " + fecha_nacimiento + " is \"" + validacion + "\"");
        }else{
			validacion=false;
            console.log("Año de nacimiento: " + fecha_nacimiento + " is \"" + validacion + "\"");
        }
	}else{
		validacion=false;
        console.log("Año de nacimiento: " + fecha_nacimiento + " is \"" + validacion + "\"");
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
       console.log ("Contraseña: " + password + " is \"" + validacion + "\"");
    }else{
		validacion=false;
        console.log ("Contraseña: " + password + " is \"" + validacion + "\"");
    }
	return validacion;
}









// - - - - - FUNCIONES SPRINT 3- - - - -
function agregarRegistro() {
	// body...
	var validaciones = validacion();
	if(cont_true_datos==3){	//Sí los tres campos son correctos se agregarán al array
		var nombreUsuario = document.getElementById('nombre_usuario').value;
		var anoNacimientoUsuario = document.getElementById('anoNacimiento_usuario').value;
		var contrasenaUsuario = document.getElementById('contrasena_usuario').value;
		let cliente = [nombreUsuario,anoNacimientoUsuario,contrasenaUsuario];
		Array.prototype.push.apply(registros,[cliente]);	// De esta manera se agrega al array ppal los datos del nuevo cliente
		alert("Registros = "+registros);	// Se puede eliminar
		cont_true_datos=0;	// Se vuelve a reiniciar el contador para analizar el sgte dato
	}
	cont_true_datos=0;
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

*/
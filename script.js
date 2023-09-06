//Esto es para crear una alerta
alert("Hola mundo");

var frasco = "pildoras";
var frasco = "comprimidos";
var frasco = "jabon";


console.log(frasco);

/*tipos de datos primitivos y no primitivos)

string
number
boolean
undefined
null
symbol
ojecct(no es primitivo) */

//string es una cadena de texto
var vaso ="452136"

//number no lleva comilas, se puede usar para hcer operaciones

var edad = 31;

//Boolean solamente tiene dos salidas que es true or false

var cuentasPremium = false;


//undefined es un tipode dato que existe pero que no esta definido o inicializado

var proximaCita = "";


//null valor que no tenemos pero que declaramos

var asistenciaInvitado = null;

//Variables para el consultorio

//strings
var nombreUsuario = 'Luis Jorge Perez Gaytan';
var correoElectronico = 'noharelastareas@gmail.com'
//Num
var edadUsuario = 55;
var precioExtraccion = 1500;

//bolean

var clienteActivo = true;
var clienteRegistradoPublicidadCorreo=false;

//undefined

var proximaCita;
var procedimiento=undefined;

//Null

var fechaUltimaLimpiezaDental= null;
var confirmacionFacturacion = null;


var edad = "22";
var peso = 70;

console.log(typeof(edad)); 

//typeof es una palabra reservada que nos ayuda a saber que tpo de dato tenemos.

//var es una variable con alcance global (tiene mayor alcance)
//let es una variable con alcance local (solo se utiliza dentro de un bloque de codigo)

//const es una constante, es decir que es una variable que no cambia

//
/*var edadTexto = edad.toString();
console.log((edad.toString));
console.log(typeof(edad));*/


var pesoCadena = peso.toString();
console.log (pesoCadena);
console.log(typeof(pesoCadena));

var edadNumero = parseInt(edad);
console.log (edadNumero);
console.log(typeof(edadNumero));


var edadUsuarioCadena = edadUsuario.toString();
console.log(edadUsuarioCadena);
console.log(typeof(edadUsuarioCadena));


var precioExtraccionNumero = parseInt(precioExtraccion);
console.log(precioExtraccion);
console.log(typeof(precioExtraccion));

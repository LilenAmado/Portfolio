//Presentación
const typed = new Typed('.typed', {
    strings: ['Desarrollo Web Front-End',
              'Maquetación web',
              'Consultora BI',
              'Operadora Técnica de Radio'],
    //stringsElement: ,
    typeSpeed: 75, //Velocidad en milisegundos para poner una letra
    startDelay: 300, //Tiempo de retraso en iniciar la animación
    backSpeed: 75, //Velocidad en milisegundos en borrar una letra
    smartBackspace: false, //Eliminar solamente las palabreas que sean nuevas en una cadena de texto
    shuffle: false, //Alterar el orden en el que escribe las palabras
    backDelay: 2000, //Tiempo de espera despues de que termina de escribir una palabra
    loop: true, //Repetir el array
    loopCount: false, //Cant de veces que repite el array. False = infinite
    showCursor: true, //Si el cursor palpita 
    cursorChar: '|', //Caracter de cursor
    contentType: 'html', //html o null para texto sin formato
}); 

//FORMULARIO ///////////////////////////////////////////////////////////
let nombre = document.getElementById('nombre')
let email = document.getElementById('email')
let asunto = document.getElementById('asunto')
let mensaje = document.getElementById('mensaje')
let small_but = document.getElementById('small_but')


function validarForm() {
    console.log('pasa')
    if (nombre.value === '' || nombre.value === null || email.value === '' || email.value === null || email.value.indexOf('@', 0) == -1 || asunto.value === '' || asunto.value === null || mensaje.value === '' || mensaje.val === null) {
        console.log(nombre.value)
        console.log(email.value)
        console.log(asunto.value)
        console.log(mensaje.value)
        small_but.innerText = 'Algún campo se encuentra vacío o es incorrecto';
        return false
    }else{
        //alert("Todos los campos correctos");
        formulario.submit();
        return true
    }
}


// Footer
// Obtenemos el elemento span por su ID
  const yearElement = document.getElementById("year");

  // Obtenemos el año actual
  const currentYear = new Date().getFullYear();

  // Actualizamos el contenido del elemento con el año actual
  yearElement.textContent = currentYear;

// Edad
 // Obtenemos el elemento span por su ID
  const edadElement = document.getElementById("edad");

  // Fecha de nacimiento (en formato año, mes, día)
  const fechaNacimiento = new Date(1996, 6, 10); // El mes se cuenta desde 0 (enero = 0, febrero = 1, etc.)

  // Fecha actual
  const fechaActual = new Date();

  // Calculamos la diferencia de años
  let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

  // Verificamos si aún no ha pasado el cumpleaños este año
  if (
    fechaActual.getMonth() < fechaNacimiento.getMonth() ||
    (fechaActual.getMonth() === fechaNacimiento.getMonth() &&
      fechaActual.getDate() < fechaNacimiento.getDate())
  ) {
    // Si aún no ha pasado el cumpleaños, restamos 1 año
    edad--;
  }

  // Actualizamos el contenido del elemento con la edad calculada
  edadElement.textContent = edad;

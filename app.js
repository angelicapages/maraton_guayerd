// EJERCICIOS DEL MARATÓN

// 1)Pedir nombre al usuario y saludarlo. Pasar el texto a Mayúsculas y a Minúsculas.
//  Mostrar ambos en pantalla.

// let nombre = prompt("Hola! Me darías tu nombre?")

// let nombreMays = nombre.toUpperCase()
// alert(nombreMays)

// let nombreMins = nombre.toLowerCase()
// alert(nombreMins)

// --------------------

// 2) Pedir al usuario dos números y mostrar la suma y resta de ellos.
// Para la resta, restar siempre al más grande el más chico.

// let numero1 = prompt("Dime un número")
// let numero2 = prompt("Dime otro número")

// let resultadoSuma = parseInt(numero1) + parseInt(numero2)
// alert(resultadoSuma)

// let resultadoResta
// if (numero1 >= numero2) {
//     resultadoResta = parseInt(numero1) - parseInt(numero2)
//     alert(resultadoResta)

// } else if (numero1 < numero2) {
//     resultadoResta = parseInt(numero2) - parseInt(numero1)
//     alert(resultadoResta)

// }
// else {
//     alert("esto no es un número")
// }

// -------------------

// 3)Ingresar un texto. Preguntar si quiere ver el resultado en pantalla 
// (alert) o consola (console.log). Pasar el texto a MAYUSCULA y mostrar 
// donde corresponda.

// let texto = prompt("Ingrese un texto")
// textoMayus = texto.toUpperCase()

// let verResultado = confirm("Quiere ver el resultado en pantalla?")

// switch (verResultado) {
//     case true:
//         alert(textoMayus)
//         break;

//     default:
//         console.log(textoMayus)
//         break;
// }

// ----------

// 4) Calculadora. Pedir ingresar dos números. Luego ingresar una operación 
// (SUMA/RESTA/MULTI/DIV/POTENCIA). Realizar la operación y mostrar el resultado en pantalla.

// let numero1 = prompt("Dime un número")
// let numero2 = prompt("Dime otro número")
// let operacion = prompt("Dime el signo de una operacion (SUMA/RESTA/MULTI/DIV/POTENCIA)")

// switch (operacion) {
//     case "+":
//         let resultadoSuma = parseInt(numero1) + parseInt(numero2)
//         alert(resultadoSuma)
//         break;

//     case "-":

//         let resultadoResta
//         if (numero1 >= numero2) {
//             resultadoResta = parseInt(numero1) - parseInt(numero2)
//             alert(resultadoResta)

//         } else {
//             resultadoResta = parseInt(numero2) - parseInt(numero1)
//             alert(resultadoResta)
//         }
//         break;

//     case "/":
//         let resultadoDivision = parseInt(numero1) / parseInt(numero2)
//         alert(resultadoDivision)
//         break;

//     case "*":
//         let resultadoMul = parseInt(numero1) * parseInt(numero2)
//         alert(resultadoMul)
//         break;

//     case "%":
//         let resultadoPot = Math.pow(parseInt(numero1), parseInt(numero2))
//         alert(resultadoPot)
//         break;

//     default:
//         alert("alguno de los datos ingresados es incorrecto")
//         break;
// }

// -----------------

// 5) Vamos reutilizar la calculadora del punto 4. Pero esta vez, luego de mostrar el resultado, 
// vamos a preguntar al usuario si desea hacer otra operación o terminar. Si quiere seguir 
// operando, volvemos a pedir valores, operación y mostrar resultado HASTA que nos diga que
// no quiere continuar.

// Extra: investigar/googlear la función de Javascript "confirm"

// do{
// let numero1 = prompt("Dime un número")
// let numero2 = prompt("Dime otro número")
// let operacion = prompt("Dime el signo de una operacion (SUMA/RESTA/MULTI/DIV/POTENCIA)")

// switch (operacion) {
//     case "+":
//         let resultadoSuma = parseInt(numero1) + parseInt(numero2)
//         alert(resultadoSuma)
//         break;

//     case "-":

//         let resultadoResta
//         if (numero1 >= numero2) {
//             resultadoResta = parseInt(numero1) - parseInt(numero2)
//             alert(resultadoResta)

//         } else {
//             resultadoResta = parseInt(numero2) - parseInt(numero1)
//             alert(resultadoResta)
//         }
//         break;

//     case "/":
//         let resultadoDivision = parseInt(numero1) / parseInt(numero2)
//         alert(resultadoDivision)
//         break;

//     case "*":
//         let resultadoMul = parseInt(numero1) * parseInt(numero2)
//         alert(resultadoMul)
//         break;

//     case "%":
//         let resultadoPot = Math.pow(parseInt(numero1), parseInt(numero2))
//         alert(resultadoPot)
//         break;

//     default:
//         alert("alguno de los datos ingresados es incorrecto")
//         break;
// }

// var seguir= confirm("Quiere seguir calculando?")

// }while (seguir === true)

// ---------------------------

// 6)Agregar alumnos/as a un curso. Vamos a pedirle al usuario que ingrese nombres
//  de alumnos/as para el nuevo curso. Continuar guardando nombres HASTA que el usuario
//  ingrese SALIR. Mostrar todos los nombres en pantalla. 


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

// let alumnos = []
// do {
//     alumnos.push(prompt("ingrese el nombre del alumno"))
//     var seguir = confirm("Quiere seguir agregando alumnos?")

// } while (seguir)

// if (seguir === false) {
//     alert(alumnos)
// }

// Forma de Malen y Angélica

// let alumnos = []
// do {
//     var alumno = prompt("ingrese el nombre del alumno")
//     alumnos.push(alumno)

// } while (alumno)

// alumnos.pop(null)

// alert(alumnos)

// -----------

// 7) Dado el siguiente array de nombres, recorrerlo y mostrar en pantalla:
//  Indice (posición) y Nombre con la primera letra en mayúscula.

// const ej7Nombres = ["goku","mario","melchor","mafalda","cacho","hermione","tony","pappo","leia", "homero"];

// for (let i = 0; i < ej7Nombres.length; i++) {
//      console.log(i + " "+ ej7Nombres[i].charAt(0).toUpperCase()+ ej7Nombres[i].slice(1));
// }

// ----------------

// 8)Para una veterianaria. Dado el siguiente array de nombres de mascotas 
// completar el código con las  siguentes reglas de negocio:
// - Si el nombre tiene más de 6 caracteres, informar: "Nombre largo"
// - Si tiene menos o es igual a 3 caracteres, informar: "Nombre corto"
// - Si es igual a "Fido" o "Gertrudis", informar: "Hay que vacunar contra la rabia"
// - Si es igual a "Tuerca", informar: "Entregar alimento balanceado"

// const ej8Mascotas = ["Tuerca", "Ramshanaram", "Perro", "Gertrudis", "Kat", "Fido", "Lo", "Loko", "MAX"];

// for (let i = 0; i < ej8Mascotas.length; i++) {
//     let mascota = ej8Mascotas[i]
//     console.log(mascota)
//     if (mascota.length > 6) {
//         console.log("Nombre largo")
//     }
//     else if (mascota.length <= 3) {
//         console.log("Nombre corto")
//     }
//     else if (mascota == "Fido" || "Gertrudis") {
//         console.log("Hay que vacunar contra la rabia")
//     }
//     else if (mascota == "Tuerca") {
//         console.log("Entregar alimento balanceado")
//     }
//     else{
//         console.log("Todo bien amigo")
//     }
// }

// ----------------

// 9) Un restaurant desea mejorar su sistema de reserva para mostrar a los clientes 
// un aproximado de costos. 
// - Cada menor de edad pagará el menú $450 y cada adulto, $700. 
// - Si el grupo tiene más de 4 adultos, se hará un 10% al total de la factura. 
// Mostrar por pantalla la cantidad de comensales y el costo total a pagar. 

// const ej9restaurant = [25, 17, 18, 44, 12, 9, 36, 50]
// let adultos = []
// let total = 0

// for (let i = 0; i < ej9restaurant.length; i++) {
//     if (ej9restaurant[i] <= 18) {
//         console.log("pagará el menú $450")
//         total = total + 450
//         console.log("Este es el total ahora" + total)

//     }
//     else if (ej9restaurant[i] >= 18) {
//         console.log("pagará el menú adulto $700")
//         adultos.push(ej9restaurant[i])
//         total = total + 700
//         console.log("Este es el total ahora" + total)
//     }
// }

// if (adultos.length <= 4) {
//     console.log("se hará un 10% al total de la factura")
//     total = (10 * total) / 100
//     console.log("Este es el total FINAL ahora" + total)
// }

// console.log(ej9restaurant.length + " " + total)

// --------------------------------

// 10)// De un consultorio médico nos piden automatizar el proceso de recepción de
//  los pacientes. 
// Para ello:
// - Ingresar código de paciente (Number XXX, 3 dígitos de 1 a 999).
// - Si el código ingresado esta entre 1 y 99, es un paciente VIP.
//   - Preguntarles "Como valoran la calidad del servicio? (1..10)". Guardar el
//  resultado ingresado.
//   - Agregar el código de paciente adelante en la cola (array) de turnos
// - Si el código ingresado esta entre 100 y 500, es un paciente de prepaga.
//   - Agregar el código de paciente al final de la cola (array) de turnos
// - Si el código ingresado esta entre 501 y 999, es un paciente nuevo.
//   - Preguntarles "Desea pasarse a VIP?". Si la respuesta es afirmativa, guardar 
// el código de paciente.
//   - Agregar el código de paciente al final de la cola (array) de turnos

// - Si todos los pacientes fueron ingresados, informar en pantalla:
//   - Calidad del servicio VIP. Informar valor promedio, valor máximo y valor mínimo.
//   - Ingreso al consultorio: Mostrar en pantalla el orden de ingreso x código de paciente.
//   - Pasarse a VIP: Mostrar en pantalla todos los códigos de pacientes que desean ser VIP

// - Nota: Escribir código con funciones para facilitar su lectura.

let turnos = []
let vip = false
let prepago = false
let nuevo = false
let calidad = []

let preguntarCalidad = () => {
    valorCalidad = parseInt(prompt("Como valoran la calidad del servicio? (1..10)"))
    if (valorCalidad >= 1 && valorCalidad <= 10) {
        console.log("valor agregado")
        calidad = valorCalidad
    }
    else {
        console.log("valor NO agregado, intente de nuevo")
        preguntarCalidad()
    }
}

do {
    var codigoPaciente = parseInt(prompt("Ingresar código de paciente (3 dígitos de 1 a 999)"))

    if (codigoPaciente >= 1 && codigoPaciente <= 99) {
        vip = true
        turnos.push(codigoPaciente)
        preguntarCalidad()

    } else if (codigoPaciente >= 100 && codigoPaciente <= 500) {
        prepago = true
        turnos.push(codigoPaciente)
        preguntarCalidad()

    } else if (codigoPaciente >= 501 && codigoPaciente <= 999) {
        nuevo = true
        let nuevoAVip = confirm("Desea pasarse a VIP?")

        if (nuevoAVip) {
            vip = true
            turnos.push(codigoPaciente)
            preguntarCalidad()
        }
        else {
            preguntarCalidad()
        }
    }
} while (codigoPaciente)


// TRUCO DE MATH MAX https://www.analyticslane.com/2020/01/24/truco-maximo-o-minimo-de-un-array-en-javascript/

let calidadRecorrida 
for (let i = 0; i < calidad.length; i++) {
    calidadRecorrida += ", " + calidad[i]
}
let calidadMax= Math.max(calidadRecorrida)

console.log("calidad max" + calidadMax)
console.log(turnos)


/* Concepto de #1 Truthy ---> Todos los valores son verdaderos al menos que se definan como falso (excepto false, 0, "", null, undefined, y NaN) */

let x = 1
x = 2n

/* Concepto #2 if else statement */

if (x) {
  console.log('VERDADERO')
} else {
  console.log('FALSO')
}

/* Concepto #3 Operador Ternario */
let edad = 17
let trago = ''

// if (edad > 18) {
//   trago = 'cerveza'
// } else {
//   trago = 'Jugo de manzana'
// }

trago = edad >= 18 ? 'Cerveza' : 'Jugo de Manzana'

console.log(trago)


let nivelDeSatisfaccion = 4

switch (nivelDeSatisfaccion) {
  case 1: 
    console.log('Muy descontento')
    break
  case 2: 
    console.log('No muy contento')
    break
  case 3:
    console.log('Contento')
    break
  case 4: 
    console.log('Muy contento')
    break
  default:
    console.log('Muy descontento')
}

const cat1A = 2500
const cat1B = 2500
const cat2A = 2500
const cat2B = 2500
const cat3A = 2500
const cat3B = 2500

const generaCuota = (genero, edad) => {
  genero = document.getElementById('genero').value
  edad = document.getElementById('edad').value

  let msj = ''
  let precio = 0

  if (edad === '') {
    msj = 'Necesitamos su edad para generar una CUOTA'
  } else if (edad < 16) {
    msj = 'Todavia no puede comprar seguro de auto'
  }
    
}
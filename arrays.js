const ejemploarray = [25, 'Ford Mustang', true, [1, 0]]

ejemploarray[1] = 'Charger'
console.log(ejemploarray)

/** ACCEDER A ELEMENTOS */

let x = ejemploarray[3][0]
console.log(x)

const carros = ['honda accord', 'ford mustang', 'toyota corolla', 'fiat 500']

/** METODO #1 */

for (let i = 0; i < carros.length; i++) {
  console.log(carros[i])
}

/** METODO #2 */
for (let carro of carros) {
  console.log(carro)
}

/** METODOS 3 */

carros.forEach((carro) => {
  console.log(carro.toUpperCase())
})

/** METODOS PRINCIPALES */

// pop(): saca el último elemento
console.log(carros.pop())

// shift(): saca el primer elemento
console.log(carros.shift())

// push(): agrega un elemento al final
carros.push('ford explorer')
console.log(carros)

// unshift(): agregar un elemento al inicio
carros.unshift('camaro')
console.log(carros)

// splice(): borra o agrega elemento de acuerdo con el indice especificado
carros.splice(0, 0, 'ford focus')
console.log(carros)
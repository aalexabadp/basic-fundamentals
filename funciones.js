/** Declarar una funcion sin return */

function imprimeMensaje() {
  console.log("Hola, soy una función");
}

imprimeMensaje();

function calculaPromedio(num1, num2, num3) {
  let promedio = num1 + num2 + num3;

  // return 'El proemdio es: ' + promedio + ' dolares'
  return `El proemdio es: ${promedio} dolares`;
}

console.log(calculaPromedio(35, 10, 9));

const calcula = calculaPromedio();
console.log(calculaPromedio(45, 35, 60));

/** Epresión de una función */
// const calculaArea = function (ancho, alto) {
//   const area = ancho * alto
//   return area
// }

// console.log(calculaArea(10, 23))

/** Funciones tipo flecha */
const calculaArea = (ancho, alto) => {
  const area = ancho * alto;
  return area;
};

console.log(calculaArea(25, 10));

const multiplicaNumero = (x) => x ** 3;
console.log(multiplicaNumero(10));

/** funciones como parametros */

const avisaUsuario = (fun, x) => {
  alert(fun(x));
};

const saludaUsuario = (nombre = " Amigo") => {
  return `Hola ${nombre}`;
};

avisaUsuario(saludaUsuario, "Sergio");

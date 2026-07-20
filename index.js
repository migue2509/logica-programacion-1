// Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
// Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
// Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
// Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
const prompt = require('prompt-sync')();

const numeros = []
let contador = 1;

while (contador <= 3) {
    let numero = Number(prompt(`Ingrese el número #${contador} `))
    numeros.push(numero);
    contador++;
}

let mayor = numeros[0];
let mitad = numeros[0];
let menor = numeros[0];


for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }

    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] !== mayor && numeros[i] !== menor) {
        mitad = numeros[i];
    }
}


console.log(mayor)
console.log(mitad)
console.log(menor)

// Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.

// menor a mayor
console.log(numeros.sort((a, b) => a - b));

//de mayor a menor
console.log(numeros.sort((a, b) => b - a));


//// Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.


if (numeros[0] === numeros[1] && numeros[1] === numeros[2]) {
    console.log("Los tres números son iguales.");
} else {
    console.log("Los numeros no son iguales")
}



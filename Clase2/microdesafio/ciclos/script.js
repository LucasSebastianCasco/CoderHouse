
//actividad 1 

/*let cantidad = prompt('INGRESE CANTIDAD DE REPETICIONES');
let texto = prompt('INGRESE TEXTO A REPETIR');
for (let index = 0; index < cantidad; index++) {
console.log(texto);
}*/


// En este caso el codigo lo que debe hacer es primero ingresar un numero que va a ser igual
//cantidad de repeticiones , luego ingreso un texto . La cantidad de veces que se va a repetir
// ese codigo es igual al numero que ingrese en la variable cantidad
//el codigo esta mal porque entra en un bucle infinito, index le falta ++ para que la variable vaya
//sumando la cantidad de veces que hace el for 

//---------------------------------------------------------------------------------
//Actividad 2

/*let lados = prompt('INGRESE CANTIDAD DE LADOS');
for (let index = 0; index < lados; index++) {
    if (index > 3) {
        console.log("La figura no es un triangulo")
    }else{
        alert("lado");
    }

}*/
//en este caso el usuario tiene que ingresar un numero que se guaardara en la variable lados
//el ciclo for se correra hasta que index sea < lados , e imprimira un mensaje "la figura no es un 
//triangulo" siempre que index sea mayor a 3 si es menor a 3 mostrara un alert con la palabra "lado"

//----------------------------------------------------------------------------------------

//desafios complementarios

/*let number = parseInt(prompt("Ingrese un número: "));

if (number % 2 === 0) {
  console.log("El número es par.");
} else {
  console.log("El número es impar.");
}*/

//----------------------------------------------------------
//let palabra = prompt("Ingrese una palabra")

//let number2 = parseInt(prompt("Ingrese un número: "));

let input = "";
let evenCount = 0;
let oddCount = 0;

while (input !== "salir") {
  input = prompt("Ingrese un número ('salir' para terminar): ");

  if (input !== "salir") {
    let number = parseInt(input);

    if (number % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
}

console.log("Cantidad de números pares: " + evenCount);
console.log("Cantidad de números impares: " + oddCount);
// Suma
// function sumar(num1, num2) {
//     console.log(num1,num2)
//     return num1 + num2;
// }

let sumar = (num1,num2)=>{
    return num1 + num2
}

// Restar
// function restar(num1, num2) {
//     return num1 - num2;
// }
let restar = function(num1,num2){
    return num1 -num2
}

// Multiplicacion
function multiplicar(num1, num2) {
    return num1 * num2;
}

// dividir
function dividir(num1, num2) {
// Verificar si el divisor es cero
if (num2 === 0) {
    return "Error: No se puede dividir entre cero";
}
    return num1 / num2;
}
  

let operacion = prompt ("Ingrese la operacion que desee realizar: (suma, resta, multiplicacion o division))")

let num1 = prompt("Ingrese el primer numero:  ")
num1=parseFloat(num1)
console.log(num1)

let num2 = prompt("Ingrese el segundo numero: ")
num2= parseFloat(num2)
console.log(num2)

let resultado= 0
 

if (operacion==="suma"){
     resultado= sumar(num1,num2)
    
    }else if(operacion==="resta") {
    resultado = restar(num1,num2)
    }else if (operacion==="multiplicacion"){
    resultado = multiplicar (num1,num2)
    }else if (operacion==="division"){
    resultado=dividir(num1,num2)
    }else {
    resultado = "operacion invalida"
}

console.log("el resultado de la operacion "+ operacion +" es "+ resultado)
alert("el resultado de la "+ operacion +" es " + resultado)


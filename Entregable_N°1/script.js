// Simulacion de tienda de productos

carrito=[]

// agregar productos al carrito 

function agregarProducto (){
    let producto =  prompt ("Ingrese nombre del producto: ");
    let precio = parseFloat(prompt("Ingrese precio del producto: "))


let nuevoProducto={
    nombre: producto,
    precio: precio
};

carrito.push(nuevoProducto);

let continuar = confirm ("Desea agregar mas productos al carrito ?")

if (continuar){
    agregarProducto();
}else{
    mostrarCarrito();
}
}

function mostrarCarrito() {
    let total = 0;
  
    console.log("Carrito de compras:");
    console.log("-------------------");
  
    // Mostrar cada producto en el carrito
    for (let i = 0; i < carrito.length; i++) {
      console.log(carrito[i].nombre + " - $" + carrito[i].precio.toFixed(2));
      total += carrito[i].precio;
    }
  
    console.log("-------------------");
    console.log("Total a pagar: $" + total.toFixed(2));
  
    // Vamos a la sección de pagos
    alert("Ir a la sección de pagos.");
  
  }

  function user() {
    let usuario = prompt("Ingrese su nombre de usuario: ");
    console.log("Bienvenido, " + usuario + "!");
  
    let iniciar = prompt("¿Desea iniciar una compra? responda 'si'o 'no' por favor");
    if (iniciar.toLowerCase()==='si') {
      agregarProducto();
      
    } else{
        console.log("Hasta luego, muchas gracias por su tiempo " + usuario + "!");
    }
    
  }

user()  

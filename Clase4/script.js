//agrego un producto al carrito validando de que exista en el array 

let arrayProducts = [];

function agregarProducto() {
  let producto = prompt("Ingrese nombre del producto: ");
  producto = producto.toLowerCase().trim();

  if (producto === null || producto === "") {
    alert("Debe ingresar un nombre de producto válido.");
  } else if (arrayProducts.includes(producto)) {
    alert("El producto ya existe, ingrese un producto diferente.");
  } else {
    arrayProducts.push(producto);
  }
}

function confirmarContinuar() {
  agregarProducto();

  let continuar = confirm("¿Desea agregar más productos al array?");

  while (continuar) {
    agregarProducto();
    continuar = confirm("¿Desea agregar más productos al array?");
  }

  console.log(arrayProducts);
}

confirmarContinuar();
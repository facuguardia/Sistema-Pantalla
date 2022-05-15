// Este sistema permite que veamos como trabaja el objeto window. El cliente quiere comprar un monitor con pantalla full HD, entregamos las medidas de nuestra pantalla y el cliente tiene la opcion de comprar o no mediante el boton de aceptar o cancelar.

let alto = window.screen.availHeight;
let ancho = window.screen.availWidth;

comprar = confirm(`El alto es: ${alto}, el ancho es: ${ancho}`)

if (comprar) {
    alert("compra realizada exitosamente");
} else {
    alert("compra cancelada");
}
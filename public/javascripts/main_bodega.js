var contador = document.getElementById("contador_productos")
var notificacion = document.getElementById("notificador_productos")
var modal = document.getElementById("modal")
var tabla = document.getElementById("tabla")



var carrito = [];


notificacion.onclick = ()=>{
    modal.classList.toggle("ocultar_modal");
}

modal.onclick = (event)=>{
    if(event.target.id=="modal"){
        modal.classList.toggle("ocultar_modal");
        event.stopImmediatePropagation();
    }
}


function less(param) {
    let span = param.parentNode.childNodes[1];
    let cantidad = parseInt(span.innerHTML)
    if(cantidad > 0){
        span.innerHTML = --cantidad
    }else{
        span.innerHTML = cantidad
    }
}

function plus(param) {
    let span = param.parentNode.childNodes[1];
    let cantidad = parseInt(span.innerHTML)
    if(cantidad >= 0){
        span.innerHTML = ++cantidad
    }else{
        span.innerHTML = cantidad
    }
}

function agregar(precio, nodo, nombre) {
    let cantidad = parseInt(nodo.parentNode.childNodes[3].childNodes[1].childNodes[1].innerHTML);
    if(cantidad > 0) {
        contador.innerHTML = carrito.push({
            precio,
            cantidad,
            nombre
        })
        if (contador.classList.contains('ocultar_contador'))
            contador.classList.remove('ocultar_contador');
    
        tabla.insertRow(-1).innerHTML = 
        `<td>${nombre}</td>
        <td>${cantidad}</td>
        <td>${precio}</td>
        <td>${precio * cantidad }</td>
        <td><span onclick="eliminar_producto(${carrito.length})">Eliminar </span></td>`;
    }
}
function eliminar_producto(index){
    carrito.splice(index, 1);
    tabla.innerHTML = ""
    carrito.forEach((e,k) => {
        tabla.insertRow(-1).innerHTML = 
        `<td>${e.nombre}</td>
        <td>${e.cantidad}</td>
        <td>${e.precio}</td>
        <td>${e.precio * e.cantidad }</td>
        <td><span onclick="eliminar_producto(${k})">Eliminar </span></td>`; 
    });
    if (carrito.length > 0){
        contador.innerHTML = carrito.length;
    }else{
        if (!contador.classList.contains('ocultar_contador'))
            contador.classList.add('ocultar_contador');
    }

}

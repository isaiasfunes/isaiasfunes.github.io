var nombre = prompt("Escribe tu nombre:");
var edad = (Number(prompt("Ingresa tu edad:")));
function saludo(nombre){
    alert("Hola " + nombre + " bienvenidooo a mi pagina web espero que lo disfrutes")
}
saludo(nombre)
if(edad >17){
    alert("Ingreso valido para el accseso!");
}else{
    alert("Ingreso a la pagina rechazado debes ser mayor de 18 para ver dicha informacion ");
}
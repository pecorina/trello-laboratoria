function agregaTrello(){

   var textoInput = document.getElementById("textoInput"),
       btnNuevo = document.getElementById("btn-agregar");

var btnAgregar = function(){
	alert("agrego");
};
var comprobarInput = function(){
	alert("compruebo");
};

textoInpu.addEventListener("click", agregaTrello);
textoInput.addEventListener("click", comprobarInput);

}


/*
var container = document.getElementById("boxis");
var textrello= document.createElement("textrello");
//var box = document.getElementById("box");
textrello.setAttribute("placeholder", "Añadir Tarea");
textrello.classList.add("text");
//asignamos padres, primero es el padre y despues es el hijo siempre.
container.appendChild(textrello);

function ingresar(){
var text= textrello.value;
var contienelista=document.getElementById("box");
var listado= document.createElement("p");
var lista=document.createTextNode("text");//variebles van sin comillas.
listado.appendChild(lista);
contienelista.appendChild(listado);

*/

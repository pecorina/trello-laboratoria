

var container = document.getElementById("boxis");
var textrello= document.createElement("textrello");
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
contienelista.appendChild.(listado);


}
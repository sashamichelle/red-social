function splash(param){
  var time = param; setTimeout(function()
    { $('#splashscreen').hide(); }, time);
};
/*aqui va el codigo para crear post*/
var botonLlamar = document.getElementById("btn");
botonLlamar.addEventListener("click", rescatarMensaje);

//Rescatando mensaje de ingreso
function rescatarMensaje(){

	var comment = document.getElementById("comment").value;
	document.getElementById("comment").value = " ";

		//Llamando a boton
		var btn = document.getElementById("btn");

		//Creando contenedor para mensajes
		var mensaje = document.createElement("div");
		mensaje.classList.add("divNuevo");

		var texto = document.createElement("p");

		//Llamando a contenedor de mensajes
		var cont = document.getElementById("cont");
		var textTwo = document.createTextNode(comment);

//Agregando hora al mensaje
var hora = new Date();
var hr = hora.getHours();
var min = minutes();

function minutes(){
	min = hora.getUTCMinutes();
	if(min < 10) {
	return '0' + min;
	} else {
		return min;
		}
	}
//Creando nodo con formato de hora
var formatoHora = document.createTextNode(hr + ":" + min);

//Creamos variable que contenga la hora en un "p"
var horaP = document.createElement("p");
horaP.innerText = "hora: ";

//Vinculando "p" a la hora
horaP.appendChild(formatoHora);

//Agregando hora al nuevo contenedor
mensaje.appendChild(horaP);

	//Dandole a cada padre su hijo
	texto.appendChild(textTwo);
	mensaje.appendChild(texto);
	cont.appendChild(mensaje);
}
/*aqui termina el codigo para crear post*/

/*aqui comienza el codigo para agregar imagenes*/

var idPin = 0;

//window.onload(...)
$(document).ready(() => {

});

function savePin() {
    var titulo = $("#tituloInput").val();
    var descripcion = $("#descripcionInput").val();
    var url = $("#urlInput").val();

    $("#pines").append("<div id='pin_" + idPin + "' class='pin col-md-3'>" +
        //Este es el frente
        "<div class='panel panel-success front'>" +
        "<div class='panel-heading'>" +
        "<h3 class='panel-title'>" + titulo + "</h3>" +
        "</div>" +
        "<div class = 'panel-body' >" +
        "<a href='#' class='thumbnail'>" +
        "<img src='" + url + "' alt='...'>" +
        "</a>" +
        "</div>" +
        "<div class = 'panel-footer' >" + descripcion + "</div> </div>" +
        //Este es el panel detrás
        "<div class='rear'>" +
        "</div>" +
        "</div>");
};
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
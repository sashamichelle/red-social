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
    var titulo ="Foto";
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

/*añadir contactos y eliminarlos*/
 $('#add').click(function(){
    /*
    * Guardo en la variable name lo ingresado en el input con clase name
    */
    var name = $('.name').val();
    /*
    * Limpio el input
    */
    /*
    * Guardo en la variable phone lo ingresado en el input con clase phone
    */
    var phone = $('.img').val();
    /*
    * Limpio el input
    */


    /*
    * Guardo en la variable contenedor el div vacío con id cont que está
    * en el html, donde se guardarán los contactos
    */
    var contenedor = $('#contcontacto');
    /*
    * Le agrego al contenedor la estructura que necesito con el valor de
    * las variables name y phone
    */
    contenedor.append('<div class="container contacto"><span class="contactito">' + name + phone + '<a href="#!" class="secondary-content"><i class="fa fa-trash basura" aria-hidden="true"></i></a>' + '</span></div>'+ '<br>');
    /*
    * Dejo la llamada hecha a la función que borra el contacto
    */
    deleteContact();
  })

  /*
  * Función que borra el contacto
  */
  function deleteContact(){
    /*
    * Esta función se ejecuta una vez que se le da click al ícono de la basura
    */
    $('.basura').click(function(){
      /*
      * toma el ícono basura al que se le hizo click (referencia)
      * y elimina al padre del padre de ese padre
      */
      $(this).parent().parent().parent().remove();
    })
  }



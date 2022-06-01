var objeto_window_referencia;
var configuracion_ventana = "menubar=no,location=no,resizable=yes,scrollbars=no,status=no,width=800,height=400";

function abrir_Popup(nombreImagen) {
  //objeto_window_referencia = window.open(encodeURI(`http://127.0.0.1:5500/assets/${nombreImagen}`), "Pagina_CNN", configuracion_ventana);
  objeto_window_referencia = window.open(encodeURI(`http://127.0.0.1:5500/${nombreImagen}`), "Pagina_CNN", configuracion_ventana);
}

let pepon1 = document.getElementById("pepon1");

pepon1.addEventListener("click", () => {
  
 //abrir_Popup("foto1.jpg");
 
 abrir_Popup("imagen1html.html");
  
});

import cargarTexto from "./cargarTexto.js";
import contadorVisitas from "./contadorVisitas.js";


contadorVisitas(localStorage.getItem("contadorImg1", "value"),
                    localStorage.getItem("contadorImg2", "value"), 
                    localStorage.getItem("contadorImg3", "value"),
                    localStorage.getItem("contadorImg4", "value"),
                    localStorage.getItem("contadorImg5", "value"));

cargarTexto();

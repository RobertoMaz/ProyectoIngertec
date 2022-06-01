/*var objeto_window_referencia;
var configuracion_ventana = "menubar=no,location=no,resizable=yes,scrollbars=no,status=no,width=800,height=400";

function abrir_Popup(nombreImagen) {
  //objeto_window_referencia = window.open(encodeURI(`http://127.0.0.1:5500/assets/${nombreImagen}`), "Pagina_CNN", configuracion_ventana);
  objeto_window_referencia = window.open(encodeURI(`http://127.0.0.1:5500/${nombreImagen}`), "Pagina_CNN", configuracion_ventana);
}

let aimg1 = document.getElementById("aimg1");

aimg1.addEventListener("click", () => {
  
 //abrir_Popup("foto1.jpg");
 
 abrir_Popup("imagen1html.html");
  
});*/

import cargarTexto from "./cargarTexto.js";
import contadorVisitas from "./contadorVisitas.js";


contadorVisitas(localStorage.getItem("contadorImg1", "value"),
                localStorage.getItem("contadorImg2", "value"), 
                localStorage.getItem("contadorImg3", "value"),
                localStorage.getItem("contadorImg4", "value"),
                localStorage.getItem("contadorImg5", "value"));

cargarTexto();
/*
let objWindowOpen;
const configVentana = "menubar=no,location=no,resizable=yes,scrollbars=no,status=no,width=800,height=400";

function abrirPopup(nombreImagen, img) {
    objWindowOpen = window.open(encodeURI(`http://127.0.0.1:5500/${nombreImagen}`), img, configVentana);
}

const
//aImg1 = document.getElementById("aimg1"),
aImg3 = document.getElementById("aimg3"),
aImg5 = document.getElementById("aimg5");


aImg1.addEventListener("click", () => {
  abrirPopup("imagen1html.html", "Imagen1");
});

aImg3.addEventListener("click", () => {
  abrirPopup("imagen3html.html", "Imagen3");
});

aImg5.addEventListener("click", () => {
  abrirPopup("imagen5html.html", "Imagen5");
});
*/


const btnOkImg1 = document.getElementById("btn-okimg1"),
      btnOkImg3 = document.getElementById("btn-okimg3"),
      btnOkImg5 = document.getElementById("btn-okimg5");

let vimg1 = localStorage.getItem("contadorImg1", "value"),
    vimg3 = localStorage.getItem("contadorImg3", "value"),
    vimg5 = localStorage.getItem("contadorImg5", "value");

const parrafoImagen1 = document.getElementById("pimg1"),
      parrafoImagen3 = document.getElementById("pimg3"),
      parrafoImagen5 = document.getElementById("pimg5");



      btnOkImg1.addEventListener("click", () => {
        vimg1++;
        localStorage.setItem("contadorImg1", vimg1);
        parrafoImagen1.innerHTML = vimg1;
    });

    btnOkImg3.addEventListener("click", () => {
      vimg3++;
        localStorage.setItem("contadorImg3", vimg3);
        parrafoImagen3.innerHTML = vimg3;
    });

    btnOkImg5.addEventListener("click", () => {
        vimg5++;
        localStorage.setItem("contadorImg5", vimg5);
        parrafoImagen5.innerHTML = vimg5;
    });
import cargarTexto from "./cargarTexto.js";
import contadorVisitas from "./contadorVisitas.js";

let objWindowOpen;
const configVentana = "menubar=no,location=no,resizable=yes,scrollbars=no,status=no,width=800,height=400";

const aImg1 = document.getElementById("aimg1"),
      aImg3 = document.getElementById("aimg3"),
      aImg5 = document.getElementById("aimg5");
      
function abrirPopup(nombreImagen, img) {
    objWindowOpen = window.open(encodeURI(`http://127.0.0.1:5500/${nombreImagen}`), img, configVentana);
}

contadorVisitas(localStorage.getItem("contadorImg1", "value"),
                localStorage.getItem("contadorImg2", "value"), 
                localStorage.getItem("contadorImg3", "value"),
                localStorage.getItem("contadorImg4", "value"),
                localStorage.getItem("contadorImg5", "value"));

cargarTexto();

aImg1.addEventListener("click", () => {
    abrirPopup("imagen1html.html", "Imagen1");
});

aImg3.addEventListener("click", () => {
    abrirPopup("imagen3html.html", "Imagen3");
});

aImg5.addEventListener("click", () => {
    abrirPopup("imagen5html.html", "Imagen5");
});

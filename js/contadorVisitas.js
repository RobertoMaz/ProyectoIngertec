const parrafoImagen1 = document.getElementById("pimg1"),
      parrafoImagen2 = document.getElementById("pimg2"),
      parrafoImagen3 = document.getElementById("pimg3"),
      parrafoImagen4 = document.getElementById("pimg4"),
      parrafoImagen5 = document.getElementById("pimg5");

const aImg1 = document.getElementById("aimg1"),
      aImg2 = document.getElementById("aimg2"),
      aImg4 = document.getElementById("aimg4"),
      aImg3 = document.getElementById("aimg3"),
      aImg5 = document.getElementById("aimg5");
/*
const btnOkImg1 = document.getElementById("btn-okimg1"),
      btnOkImg3 = document.getElementById("btn-okimg3"),
      btnOkImg5 = document.getElementById("btn-okimg5");*/

let objWindowOpen;
const configVentana = "menubar=no,location=no,resizable=yes,scrollbars=no,status=no,width=800,height=400";

function abrirPopup(nombreImagen, img) {
    objWindowOpen = window.open(encodeURI(`http://127.0.0.1:5500/${nombreImagen}`), img, configVentana);
}



if(localStorage.getItem("contadorImg1") === null) localStorage.setItem("contadorImg1", 0);

if(localStorage.getItem("contadorImg2") === null) localStorage.setItem("contadorImg2", 0);

if(localStorage.getItem("contadorImg3") === null) localStorage.setItem("contadorImg3", 0);

if(localStorage.getItem("contadorImg4") === null) localStorage.setItem("contadorImg4", 0);

if(localStorage.getItem("contadorImg5") === null) localStorage.setItem("contadorImg5", 0);


export default function contadorVisitas(visualizacionImg1, visualizacionImg2, visualizacionImg3, visualizacionImg4, visualizacionImg5){
   
    aImg2.addEventListener("click", () => {
        visualizacionImg2++;
        localStorage.setItem("contadorImg2", visualizacionImg2);
        parrafoImagen2.innerHTML = visualizacionImg2;
    });
    parrafoImagen2.innerHTML = visualizacionImg2;

    aImg4.addEventListener("click", () => {
        visualizacionImg4++;
         localStorage.setItem("contadorImg4", visualizacionImg4);
         parrafoImagen4.innerHTML = visualizacionImg4
    });
    parrafoImagen4.innerHTML = visualizacionImg4;

   
    aImg1.addEventListener("click", () => {
        abrirPopup("imagen1html.html", "Imagen1");
      });
    
    aImg3.addEventListener("click", () => {
        abrirPopup("imagen3html.html", "Imagen3");
    });
    
    aImg5.addEventListener("click", () => {
        abrirPopup("imagen5html.html", "Imagen5");
    });

    parrafoImagen1.innerHTML = visualizacionImg1;
    parrafoImagen3.innerHTML = visualizacionImg3;
    parrafoImagen5.innerHTML = visualizacionImg5;


    /*
    btnOkImg1.addEventListener("click", () => {
        visualizacionImg1++;
        localStorage.setItem("contadorImg1", visualizacionImg1);
        parrafoImagen1.innerHTML = visualizacionImg1;
    });

    btnOkImg3.addEventListener("click", () => {
        visualizacionImg3++;
        localStorage.setItem("contadorImg3", visualizacionImg3);
        parrafoImagen3.innerHTML = visualizacionImg3;
    });

    btnOkImg5.addEventListener("click", () => {
        visualizacionImg5++;
        localStorage.setItem("contadorImg5", visualizacionImg5);
        parrafoImagen5.innerHTML = visualizacionImg5;
    });
*/

}


/*
parrafoImagen4.innerHTML = `<p>Vistas ${visualizacionImg4} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
<path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
</svg></p>`;*/









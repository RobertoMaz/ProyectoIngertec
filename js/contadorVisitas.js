const parrafoImagen1 = document.getElementById("pimg1"),
      parrafoImagen2 = document.getElementById("pimg2"),
      parrafoImagen3 = document.getElementById("pimg3"),
      parrafoImagen4 = document.getElementById("pimg4"),
      parrafoImagen5 = document.getElementById("pimg5");

const aImg2 = document.getElementById("aimg2"),
      aImg4 = document.getElementById("aimg4");


if(localStorage.getItem("contadorImg1") === null) localStorage.setItem("contadorImg1", 0);

if(localStorage.getItem("contadorImg2") === null) localStorage.setItem("contadorImg2", 0);

if(localStorage.getItem("contadorImg3") === null) localStorage.setItem("contadorImg3", 0);

if(localStorage.getItem("contadorImg4") === null) localStorage.setItem("contadorImg4", 0);

if(localStorage.getItem("contadorImg5") === null) localStorage.setItem("contadorImg5", 0);


export default function contadorVisitas(visualizacionImg2, visualizacionImg4){
   
    aImg2.addEventListener("click", () => {
        visualizacionImg2++;
        localStorage.setItem("contadorImg2", visualizacionImg2);
        parrafoImagen2.innerHTML = visualizacionImg2;
    });

    parrafoImagen2.innerHTML = visualizacionImg2;

    aImg4.addEventListener("click", () => {
        visualizacionImg4++;
        localStorage.setItem("contadorImg4", visualizacionImg4);
        parrafoImagen4.innerHTML = visualizacionImg4;
    });

    parrafoImagen4.innerHTML = visualizacionImg4;

    setInterval(() => {
        parrafoImagen1.innerHTML = localStorage.getItem("contadorImg1", "value")
    }, 500);

    setInterval(() => {
        parrafoImagen3.innerHTML = localStorage.getItem("contadorImg3", "value")
    }, 500);

    setInterval(() => {
        parrafoImagen5.innerHTML = localStorage.getItem("contadorImg5", "value")
    }, 500);
}

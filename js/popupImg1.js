const btnOkImg1 = document.getElementById("btn-okimg1"); // Capturamos el boton ok, del popup.
let vimg1 = localStorage.getItem("contadorImg1", "value"); // vamos a buscar los datos guardados en "localStorage".

// Evento del boton para submar vistas y cerrar la ventana.
btnOkImg1.addEventListener("click", () => {
    vimg1++;
    localStorage.setItem("contadorImg1", vimg1);
    window.close(); 
});

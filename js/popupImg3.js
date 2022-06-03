const btnOkImg3 = document.getElementById("btn-okimg3"); // Capturamos el boton ok, del popup.
let vimg3 = localStorage.getItem("contadorImg3", "value"); // vamos a buscar los datos guardados en "localStorage".

// Evento del boton para submar vistas y cerrar la ventana.
btnOkImg3.addEventListener("click", () => {
    vimg3++;
    localStorage.setItem("contadorImg3", vimg3);
    window.close(); 
});

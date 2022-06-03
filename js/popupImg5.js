const btnOkImg5 = document.getElementById("btn-okimg5"); // Capturamos el boton ok, del popup.
let vimg5 = localStorage.getItem("contadorImg5", "value"); // vamos a buscar los datos guardados en "localStorage".

// Evento del boton para submar vistas y cerrar la ventana.
btnOkImg5.addEventListener("click", () => {
    vimg5++;
    localStorage.setItem("contadorImg5", vimg5);
    window.close(); 
});

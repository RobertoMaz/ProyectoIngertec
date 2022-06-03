const btnCargarTexto = document.getElementById("btn-cargartexto"), // Captura el boton "Cargar Texto".
      texto = document.getElementById("text");  // Captura el area donde vamosa insetar el texto.

export default function cargarTexto(){
    btnCargarTexto.addEventListener("click", () => {
        fetch("home.json") // Peticion JSON.
            .then((res) => (
                res.ok 
                    ? res.json() 
                    : Promise.reject(res)))
            .then((json) => 
                texto.value = json.texto) // Si todo sale bien. imprime el JSON en area del texto.
            .catch((err) =>{
                // Por lo contrario si hay un error, tira el dato del error si no lo encuentra imprime "Ocurrio un error."
                btnCargarTexto.classList.remove("btn-success"); 
                btnCargarTexto.classList.add("btn-danger");
                let mensaje = err.statusText || "Ocurrio un error, no se encontro el texto.";
                btnCargarTexto.innerHTML = `<p>Error ${err.status}: ${mensaje}</p>`
            });
    })
}

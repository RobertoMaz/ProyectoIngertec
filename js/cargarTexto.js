const btnCargarTexto = document.getElementById("btn-cargartexto"),
      texto = document.getElementById("text"),
      divBtn = document.getElementById("div-btn");

export default function cargarTexto(){
    btnCargarTexto.addEventListener("click", () => {
        fetch("home.json")
            .then((res) => (
                res.ok 
                    ? res.json() 
                    : Promise.reject(res)))
            .then((json) => 
                texto.value = json.texto)
            .catch((err) =>{
                let mensaje = err.statusText || "Ocurrio un error, no se encontro el texto.";
                divBtn.innerHTML = `<p>Error ${err.status}: ${mensaje}</p>`
            });
    })
}
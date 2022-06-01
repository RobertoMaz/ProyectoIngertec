const btnOkImg5 = document.getElementById("btn-okimg5");

let vimg5 = localStorage.getItem("contadorImg5", "value");



btnOkImg5.addEventListener("click", () => {
    vimg5++;
    localStorage.setItem("contadorImg5", vimg5);
    window.close(); 
});

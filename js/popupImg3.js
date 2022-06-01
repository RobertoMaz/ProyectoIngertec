const btnOkImg3 = document.getElementById("btn-okimg3");
let vimg3 = localStorage.getItem("contadorImg3", "value");

btnOkImg3.addEventListener("click", () => {
    vimg3++;
    localStorage.setItem("contadorImg3", vimg3);
    window.close(); 
});
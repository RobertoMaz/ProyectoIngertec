const btnOkImg1 = document.getElementById("btn-okimg1");
let vimg1 = localStorage.getItem("contadorImg1", "value");

btnOkImg1.addEventListener("click", () => {
    vimg1++;
    localStorage.setItem("contadorImg1", vimg1);
    window.close(); 
});






const ingresaTexto = document.getElementById("ingresaTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensaje = document.getElementById("mensaje");
const muneco = document.getElementById("muneco")
const info = document.getElementById("info")
const cajatextoderecha = document.getElementById("cajatextoderecha")

let reemplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]

const remplaza = (nuevoValor) =>{
    mensaje.innerHTML = nuevoValor; 
    muneco.classList.add("oculto");
    ingresaTexto.value = "";
    info.style.display = "none";
    botonCopiar.style.display = "block";
    cajatextoderecha.classList.add("ajustar");
    mensaje.classList.add("ajustar");
}

botonEncriptar.addEventListener("click",() => {
    const texto = ingresaTexto.value.toLowerCase();
    if (texto != ""){
        function encriptar(newText) {
             for (let i = 0; i < reemplazar.length; i++) {
                  if (newText.includes(reemplazar[i][0])) {
                      newText = newText.replaceAll(reemplazar[i][0], reemplazar[i][1]);
                    }; 
                };
                return newText
        };
    }    
    //const textoEncriptado = encriptar(texto)
    remplaza(encriptar(texto));
})

botonDesencriptar.addEventListener("click",() => {
    const texto = ingresaTexto.value.toLowerCase();
    if (texto != ""){
        function desencriptar(newText) {
             for (let i = 0; i < reemplazar.length; i++){
                  if(newText.includes(reemplazar[i][1])) {
                    newText = newText.replaceAll(reemplazar[i][1], reemplazar[i][0]);
                 };
            };
            return newText
        };
    }    
    //const textoDesencriptado = desencriptar(texto);
    remplaza(desencriptar(texto));
})

botonCopiar.addEventListener("click", () => {
    let texto = mensaje;
    texto.select();
    document.execCommand('copy')
    mensaje.innerHTML = "";
    muneco.classList.remove("oculto");
    info.style.display = "block"
    botonCopiar.style.display = "none";
    cajatextoderecha.classList.remove("ajustar");
    mensaje.classList.remove("ajustar");
    ingresaTexto.focus();
})

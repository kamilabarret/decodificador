const textoInput = document.getElementById("textoInput");
const buttonCriptografar = document.getElementById("buttonCriptografar");
const buttonDescriptografar = document.getElementById("buttonDescriptografar");
const buttonCopiar = document.getElementById("buttonCopiar");
const boneco = document.getElementById("boneco");
const textoFinal = document.getElementById("textoFinal");
const textoInfo = document.getElementById("textoInfo");
const right = document.getElementById("right")

let remplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"]
];



buttonCriptografar.addEventListener('click', () => {
    const texto = textoInput.value.toLowerCase();

    if (texto != "") {
        function criptografar(newText) {
            for (let i = 0; i < remplazar.length; i++) {
                if (newText.includes(remplazar[i][0])) {
                    newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]);
                };
            };
            return newText;
        }
    };

    const textoCriptografado = criptografar(texto);
    textoFinal.innerHTML = textoCriptografado;

    textoInput.value= ""
    boneco.style.display = "none";
    textoInfo.style.display = "none";
    buttonCopiar.style.display = "block";
    right.classList.add("ajuste");
    textoFinal.classList.add("ajustar");

});

buttonDescriptografar.addEventListener('click', () => {

    const texto = textoInput.value.toLowerCase();

    if (texto != "") {
        function descriptografar(newText) {
            for (let i = 0; i < remplazar.length; i++) {
                if (newText.includes(remplazar[i][1])) {
                    newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
                };
            };
            return newText;
        }
    }
    const textoDescriptografado = descriptografar(texto);
    textoFinal.innerHTML = textoDescriptografado;
});

buttonCopiar .addEventListener('click', () => {
        let texto = textoFinal;
        texto.select();
        document.execCommand("Copy");
        alert("Texto Copiado");


        textoFinal.innerHTML="";

        


}) 

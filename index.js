const diccionario = [
    "Q", "R", "S", "T", "U", //AZ
    "a", "b", "c", "d", "e", "f", //az
    "-", "_", "@", "#", "$", "%", "&", "*", //simbolos
    "g", "h", "i", "j", "k", "l", //az
    "Á", "É", "Í", "Ó", "Ú", //ÁÚ
    "G", "H", "I", "J", "K", "L", //AZ 
    "=", "/", "|", "[", "]", "{", "}", //simbolos
    "0", "1", "2", "3", "4", //numeros
    "A", "B", "C", "D", "E", "F", //AZ
    "m", "n", "ñ", "o", "p", //az
    "à", "è", "ì", "ò", "ù", //àù
    "V", "W", "X", "Y", "Z", //AZ
    ".", ",", ":", ";", "!", "?", "(", ")", //simbolos
    "5", "6", "7", "8", "9", //numeros
    "q", "r", "s", "t", "u", //az
    "M", "N", "Ñ", "O", "P", //AZ
    "á", "é", "í", "ó", "ú", //áú
    "v", "w", "x", "y", "z", //az
    "+", "<", ">", "¡", "¿", "ç", "'", '"', //simbolos
    "À", "È", "Ì", "Ò", "Ù", //ÀÙ
];


const texto = document.getElementById('texto');
const be = document.getElementById('botonE');
const bd = document.getElementById('botonD');
const resultado = document.getElementById('resultado');


function encriptar_desencriptar (texto, accion){
    let resp = "";
    const size = texto.length;
    
    for (let i = 0; i < size; i++) {
        const letra = texto[i];
        let index = diccionario.indexOf(letra);
        if (index == -1) {
            resp += letra;
        } else {
            switch (accion) {
                case "e":
                    index = ((size - 2)+(index + size) + 1) % diccionario.length;
                    break;

                case "d":
                    //la operacion es la misma que la de encriptar pero al reves
                    index = ((index - size) - (size - 2) - 1) % diccionario.length;
                    break;

                default:
                    break;
            }
            index < 0 ? index = diccionario.length + index : index;
            resp += diccionario[index];
        }
        resultado.innerText = resp;
    }
}

be.addEventListener('click', () =>
    encriptar_desencriptar(texto.value.trim(), "e")
);
bd.addEventListener('click', () =>
    encriptar_desencriptar(texto.value.trim(), "d")
);
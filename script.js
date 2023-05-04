const textArea = document.querySelector(".textArea");
const mensaje = document.querySelector(".mensaje");

/*
    e --> enter
    i --> imes
    a --> ai
    o --> ober
    u --> ufat

    function copyText() {
            
            //leemos el texto de una area determinada
            var text = document.getElementById("dummy-text").innerHTML;
            //En este ejemplo solamente tenemos texto por lo que podríamos usar .innerText
            //Pero supongamos que tuvieramos algo mas que texto, como bloques de codigo,
            //entonces sería mejor usar .innerHTML

            //ahora usamos navigator object

            navigator.clipboard.writeText(text);

        } */

function botonEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function botonDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
}

function botonCopiar() {
    if (mensaje.value == "") {
        return;
    }else{
        let textoCopiado = mensaje.value;
        navigator.clipboard.writeText(textoCopiado);
    }
    
}

function encriptar(stringEncriptado){
    let llavesEncript = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < llavesEncript.length ; i++){
        if(stringEncriptado.includes(llavesEncript[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(llavesEncript[i][0], llavesEncript[i][1]);
        }
    }
    return stringEncriptado;
}

function desencriptar (stringDesencriptado){
    let llavesEncript = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < llavesEncript.length ; i++){
        if(stringDesencriptado.includes(llavesEncript[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(llavesEncript[i][1], llavesEncript[i][0]);
        }
    }
    return stringDesencriptado;
}
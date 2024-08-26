const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
const btnCopiar = document.querySelector(".btn-copiar");
const informacao = document.querySelector(".informacao");
const containerEncriptado = document.querySelector(".container-encriptado");
const tituloMensagem = document.querySelector(".container-encriptado h2");
const paragrafoMensagem = document.querySelector(".container-encriptado p");
const imagem = document.querySelector(".imagem"); // Seleciona a imagem do boneco

// Inicialmente, esconde o botão "Copiar"
btnCopiar.style.display = "none";

function btnEncriptar() {
    // Detecta se a mensagem está criptografada
    if (isEncrypted(textArea.value)) {
        const textoDesencriptado = desencriptar(textArea.value);
        if (textoDesencriptado) {
            mensagem.value = textoDesencriptado;
            textArea.value = "";
            esconderElementosMensagem(); // Oculta elementos da mensagem
            btnCopiar.style.display = "block"; // Mostra o botão "Copiar"
        }
    } else {
        const textoEncriptado = encriptar(textArea.value);
        if (textoEncriptado) {
            mensagem.value = textoEncriptado;
            textArea.value = "";
            esconderElementosMensagem(); // Oculta elementos da mensagem
            btnCopiar.style.display = "block"; // Mostra o botão "Copiar"
        }
    }
}

function btnDesencriptar() {
    // Apenas desencripta o texto, sem tentar encriptar novamente
    const textoDesencriptado = desencriptar(mensagem.value);
    if (textoDesencriptado) {
        mensagem.value = textoDesencriptado;
        textArea.value = "";
        esconderElementosMensagem(); // Oculta elementos da mensagem
        btnCopiar.style.display = "block"; // Mostra o botão "Copiar"
    }
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }

    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }

    return stringDesencriptada;
}

function isEncrypted(text) {
    // Verifica se o texto contém padrões de criptografia
    return text.includes("enter") || text.includes("imes") || text.includes("ai") || text.includes("ober") || text.includes("ufat");
}

function btnCopiarr() {
    navigator.clipboard.writeText(mensagem.value)
        .then(() => {
            alert("Texto copiado para a área de transferência");
        })
        .catch(err => {
            console.error('Erro ao copiar texto: ', err);
        });
}

function esconderElementosMensagem() {
    // Oculta o título, parágrafo e a imagem do boneco dentro do container de mensagens
    tituloMensagem.style.display = "none";
    paragrafoMensagem.style.display = "none";
    imagem.style.display = "none"; // Oculta a imagem do boneco
}
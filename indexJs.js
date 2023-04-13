function encriptar() {
  let texto = document.getElementById("texto").value;
  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  if (texto.length === 0) {
    alert("Por favor escribe algo");
  } else {
    document.getElementById("Resultado_I").value = textoCifrado;
    document.getElementById("imagenC").src="imagenes/encriptado.jpg";
    document.getElementById("textoC").textContent="¡Texto Encriptado!";
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let textoDesencriptado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  if (texto.length === 0) {
    alert("Por favor escribe algo");
  } else {
    document.getElementById("Resultado_I").value = textoDesencriptado;
    document.getElementById("imagenC").src="imagenes/desencriptado.jpg";
    document.getElementById("textoC").textContent="¡Texto Desencriptado!";
  }
}
function copiarTexto() {
  const textoDesencriptado = document.getElementById("Resultado_I");
  textoDesencriptado.select();
  document.execCommand("copy");
  document.getElementById("imagenC").src="imagenes/copiado.jpg";
  document.getElementById("textoC").textContent="¡Texto copiado!";
}



function verificarStickers() {

  const cantidad1 = parseInt(document.getElementById("input1").value) || 0;
  const cantidad2 = parseInt(document.getElementById("input2").value) || 0;
  const cantidad3 = parseInt(document.getElementById("input3").value) || 0;

  const total = cantidad1 + cantidad2 + cantidad3;


  const resultado = document.getElementById("resultado");


  if (total === 1) {
    resultado.textContent = "Llevas 1 sticker.";
    resultado.style.color = "lightgreen";
  } else if (total <= 10) {
    resultado.textContent = `Llevas ${total} stickers.`;
    resultado.style.color = "lightgreen";
  } else {
    resultado.textContent = "Llevas demasiados stickers.";
    resultado.style.color = "salmon";
  }
}

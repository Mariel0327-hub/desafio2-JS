function verificarPassword() {
  const digito1 = document.getElementById("digit1").value;
  const digito2 = document.getElementById("digit2").value;
  const digito3 = document.getElementById("digit3").value;

  const password = digito1 + digito2 + digito3;
  const mensaje = document.getElementById("mensaje");

  if (password === "911") {
    mensaje.textContent = "Acceso permitido: ¡Disfruta tu cerveza de mantequilla!";
    mensaje.style.color = "mediumseagreen";
  } else if (password === "714") {
    mensaje.textContent = "Acceso permitido: Ahhh, así que eres menor, ¿eh? ¡Bienvenido, pero esta vez solo podrás tomar hidromiel sin alcohol!";
    mensaje.style.color = "lightgreen";
  } else {
    mensaje.textContent = "Acceso denegado: código incorrecto.";
    mensaje.style.color = "salmon";
  }
}

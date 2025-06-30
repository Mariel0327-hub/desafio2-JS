document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM cargado");

  const img = document.getElementById("imagen-HP");

  if (!img) {
    console.error("No se encontró la imagen con id 'imagen-HP'");
    return;
  }

  let borderMostrado = false;

  img.addEventListener("click", function () {
    if (!borderMostrado) {
      img.style.border = "5px red solid";
      borderMostrado = true;
    } else {
      img.style.border = "none";
      borderMostrado = false;
    }

    console.log("Clic detectado. Borde activo:", borderMostrado);
  });
});

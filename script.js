function mostrarMensaje() {
  alert('Hydra es el software ideal para la automatización logística: rutas inteligentes, inventario en tiempo real y mucho más.');
}

let opacidadActual = 1;

function cambiarOpacidad() {
  const img = document.getElementById("robot-img");
  opacidadActual = opacidadActual === 1 ? 0.5 : 1;
  img.style.opacity = opacidadActual;
}

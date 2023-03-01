document.getElementById("sobre").addEventListener("click", correoOpacity);

function correoOpacity() {
  document.getElementById("textoCorreo").style.opacity=100;
  document.getElementById("sobre").style.color="yellow"
}

document.getElementById("web").addEventListener("click", webOpacity);

function webOpacity() {
  document.getElementById("paginaWeb").style.opacity=100;
  document.getElementById("web").style.color="yellow"
}

document.getElementById("telefono").addEventListener("click", contactoOpacity);

function contactoOpacity() {
  document.getElementById("contacto").style.opacity=100;
  document.getElementById("telefono").style.color="yellow"
}

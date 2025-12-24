const boton = document.getElementById("boton");
const foto = document.getElementById("foto");
const mensaje = document.getElementById("mensaje");
const audio = document.getElementById("audio");

boton.addEventListener("click", () => {
  foto.style.display = "block";
  mensaje.style.opacity = "1";

  audio.currentTime = 0;
  audio.play();

  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
  }, 45000);

  boton.style.display = "none";
});

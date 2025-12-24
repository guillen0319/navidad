const boton = document.getElementById("boton");
const foto = document.getElementById("foto");
const mensaje = document.getElementById("mensaje");
const audio = document.getElementById("audio");

boton.addEventListener("click", () => {
    // Mostrar imagen y mensaje
    foto.style.display = "block";
    mensaje.style.display = "block";
    boton.style.display = "none";

    // Reproducir canción
    audio.currentTime = 0;
    audio.play();

    // Detener en 45 segundos
    setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
    }, 45000);
});

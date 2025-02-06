document.addEventListener("DOMContentLoaded", function () {
  const audio = new Audio("./assets/love.mp3");

  const playAudio = () => {
    audio.play().catch(error => {
      console.log("Reproducción automática bloqueada, esperando interacción del usuario.");
    });
  };

  playAudio();

  document.body.addEventListener("click", () => {
    audio.play();
  }, { once: true });

  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.key === 'u')) {
      e.preventDefault();
    }
  });

  // Mostrar carta cuando se presiona el botón
  document.getElementById("openLetter").addEventListener("click", function () {
    document.getElementById("valentine-section").style.display = "none";
    document.getElementById("letter-section").style.display = "flex";
  });
});

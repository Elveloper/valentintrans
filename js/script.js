document.addEventListener('contextmenu', function (e) {
e.preventDefault();
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("openLetter").addEventListener("click", function () {
    window.location.href = "carta.html";
  });
});

document.addEventListener('keydown', function (e) {
if (e.key === 'F12') {
  e.preventDefault();
}
if (e.ctrlKey && e.shiftKey && e.key === 'I') {
  e.preventDefault();
}
if (e.ctrlKey && e.key === 'u') {
  e.preventDefault();
}
});
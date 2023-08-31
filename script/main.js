document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const overlay = document.getElementById("overlay");
  const body = document.body;

  document.getElementById("burger").addEventListener("click", function () {
    header.classList.toggle("open");
    body.classList.toggle("disable__scroll");
    if (header.classList.contains("open")) {
      overlay.style.display = "block";
    } else {
      overlay.style.display = "none";
    }
  });

  document
    .getElementById("sidenav-close")
    .addEventListener("click", function () {
      header.classList.toggle("open");
      overlay.style.display = "none";
      body.classList.toggle("disable__scroll");
    });
});

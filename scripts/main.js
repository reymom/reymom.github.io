document.addEventListener("DOMContentLoaded", () => {
  fetch("/pages/common/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
    });

  fetch("/pages/common/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });
});
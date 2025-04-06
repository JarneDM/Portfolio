document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const modal = document.getElementById("successModal");
  modal.style.display = "flex";

  this.reset();
});

document.getElementById("modalClose").addEventListener("click", function () {
  document.getElementById("successModal").style.display = "none";
});

document.getElementById("successModal").addEventListener("click", function (e) {
  if (e.target === this) {
    this.style.display = "none";
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    document.getElementById("successModal").style.display = "none";
  }
});

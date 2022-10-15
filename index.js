const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});

const hamBtn = document.getElementById("mobile-menu-open-btn");
const mobileMenu = document.querySelector(".mobile-nav-menu");
const closeBtn = document.querySelector(".mobile-menu-close-btn");

hamBtn.addEventListener("click", function () {
  hamBtn.classList.remove("active");
  hamBtn.classList.add("inactive");

  mobileMenu.classList.remove("inactive");
  mobileMenu.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  hamBtn.classList.remove("inactive");
  hamBtn.classList.add("active");

  mobileMenu.classList.remove("active");
  mobileMenu.classList.add("inactive");
});

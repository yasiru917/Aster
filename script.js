const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuIcon = document.getElementById("mobile-menu-icon");

if (mobileMenuBtn && mobileMenu && mobileMenuIcon) {
  mobileMenuBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    mobileMenuBtn.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);

    mobileMenuIcon.src = isOpen
      ? "./img/svg/close-svgrepo-com.svg"
      : "./img/svg/hamburger-menu-svgrepo-com.svg";

    mobileMenuIcon.alt = isOpen ? "Close menu" : "Open menu";
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("is-open");
      mobileMenuBtn.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
      mobileMenuIcon.src = "./img/svg/hamburger-menu-svgrepo-com.svg";
      mobileMenuIcon.alt = "Open menu";
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1023) {
      mobileMenu.classList.remove("is-open");
      mobileMenuBtn.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
      mobileMenuIcon.src = "./img/svg/hamburger-menu-svgrepo-com.svg";
      mobileMenuIcon.alt = "Open menu";
    }
  });
}

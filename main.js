
const mode = document.querySelector(".mode");
const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");
const body = document.querySelector("body");

mode.addEventListener("click", () => {
  mode.classList.toggle("hidden");

  if (mode.classList.contains("hidden")) {
    body.style.background = "#fff";
    document.documentElement.style.setProperty("--white", "#1e1e1e");
    document.documentElement.style.setProperty("--black", "#fff");
    document.documentElement.style.setProperty("--gray", "#333");
  } else {
    body.style.background = "#1e1e1e";
    document.documentElement.style.setProperty("--white", "#fff");
    document.documentElement.style.setProperty("--black", "#1e1e1e");
    document.documentElement.style.setProperty("--gray", "#ccc");
  }
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const headerHeight = header.offsetHeight;

  if (this.window.scrollY > headerHeight) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
});

const hamburger = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("show");
});

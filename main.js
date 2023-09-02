document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const inputs = form.querySelectorAll("input, textarea");

  form.addEventListener("submit", function (event) {
    inputs.forEach(function (input) {
      if (input.value.trim() === "") {
        input.style.border = "1px solid red";
        input.previousElementSibling.style.color = "red";
        input.classList.add("shake");
        input.closest(".input-div").classList.add("shake");
        setTimeout(function () {
          input.classList.remove("shake");
          input.closest(".input-div").classList.remove("shake");
        }, 400);
      }
    });

    if (!isValidEmail(inputs)) {
      const emailInput = document.querySelector(".email");
      emailInput.style.border = "1px solid red";
      emailInput.previousElementSibling.style.color = "red";
      emailInput.classList.add("shake");
      emailInput.closest(".input-div").classList.add("shake");
      setTimeout(function () {
        emailInput.classList.remove("shake");
        emailInput.closest(".input-div").classList.remove("shake");
      }, 400);

      event.preventDefault();
    }
  });

  inputs.forEach(function (input) {
    input.addEventListener("input", function () {
      input.style.border = "1px solid var(--light-turqoise)";
      input.previousElementSibling.style.color = "var(--light-turqoise)";
    });
  });

  function isValidEmail(inputs) {
    const emailInput = document.querySelector(".email");
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailValue !== "" && emailPattern.test(emailValue);
  }
});

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

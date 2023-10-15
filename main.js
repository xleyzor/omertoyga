const circle = document.querySelector(".circle");
const github = document.getElementById("github");
const instagram = document.getElementById("instagram");
const gmail = document.getElementById("gmail");
circle.addEventListener("click", () => {
  github.classList.toggle("show1");
  gmail.classList.toggle("show2");
  instagram.classList.toggle("show3");
});

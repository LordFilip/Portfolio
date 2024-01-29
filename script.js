window.onscroll = function () {
  myFunction();
};

var navbar = document.querySelector(".navbar");
var sticky = navbar.offsetTop;
console.log(sticky);

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-link");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;
  const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

  const lineWidth = scrollPercent * 2 + "%";
  document.querySelector(".line").style.width = lineWidth;
});
window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;
  const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

  const lineWidth = 100 - scrollPercent + "%"; // Adjusting line width
  document.querySelector(".line-2").style.width = lineWidth;
});
const bidon = document.getElementById("x");
const lavor = document.getElementById("lavor");
bidon.addEventListener("click", function () {
  lavor.classList.toggle("menu-move");
});

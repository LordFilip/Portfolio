/*
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

  // Calculate the line width based on the scroll percentage
  let lineWidth = scrollPercent * 2;

  // Ensure the line width does not exceed 100vw
  lineWidth = Math.min(lineWidth, 100);

  // Apply the width to the line element
  document.querySelector(".line").style.width = lineWidth + "vw";
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

const grid = document.querySelector(".grid");
const gridContainer = document.querySelector(".grid-container");

const obsCallback = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      grid.classList.add("newgrid");
    } else {
      grid.classList.remove("newgrid");
    }
  });
};

const obsOptions = {
  root: null,
  threshold: 0.4,
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(gridContainer);
*/
// Cache selectors
const navbar = document.querySelector(".navbar");
const links = document.querySelectorAll(".nav-link");
const line = document.querySelector(".line");
const line2 = document.querySelector(".line-2");
const grid = document.querySelector(".grid");
const gridContainer = document.querySelector(".grid-container");
const bidon = document.getElementById("x");
const lavor = document.getElementById("lavor");

// Calculate sticky offset
const sticky = navbar.offsetTop;

// Scroll event handler
window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;
  const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

  // Apply sticky class to navbar
  if (scrollTop >= sticky) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }

  // Calculate and apply line width
  let lineWidth = Math.min(scrollPercent * 2, 100);
  line.style.width = lineWidth + "vw";

  // Calculate and apply line2 width
  line2.style.width = 100 - scrollPercent + "%";
});

// Smooth scroll for navigation links
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

// Toggle class on click
bidon.addEventListener("click", function () {
  lavor.classList.toggle("menu-move");
});

// Intersection Observer
const obsCallback = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      grid.classList.add("newgrid");
    }
  });
};

const obsOptions = {
  root: null,
  threshold: 0.4,
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(gridContainer);

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

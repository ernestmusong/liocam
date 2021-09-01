//set date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

//close links
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

//fixed nav
const bigNav = document.getElementById("big-nav");
const topLink = document.querySelector(".top-link");
const navbar = document.getElementById("nav")

window.addEventListener("scroll", function () {
  let scrollHeight = window.pageYOffset;
  console.log(scrollHeight);
  

  const navHeight = navbar.getBoundingClientRect().height;
  console.log(navHeight);
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

//select links
 

// Log shortcut
function l(x) {
  console.log(x);
}

// Element initialization
const cards = document.querySelectorAll(".feature-card");
const ctaButton = document.getElementById("cta-button");
const productLink = document.getElementById("product-link");
const featuresLink = document.getElementById("features-link");
const pricingLink = document.getElementById("pricing-link");
const allLinks = document.querySelectorAll(".navbar-wagon-item");
const questionMark = document.querySelector("#container-quest");
const helper = document.querySelector("#helper");
const navbar = document.querySelector("#navbar");
const mainProductRight = document.querySelector("#main-scroll-right");
const mainProductLeft = document.querySelector("#main-scroll-left");
const mainProductScroll = document.querySelector("#main-cards")
const minorProductRight = document.querySelector("#minor-scroll-right");
const minorProductLeft = document.querySelector("#minor-scroll-left");
const minorProductScroll = document.querySelector("#minor-cards")

// Make other cards opaque on mouse-over
cards.forEach(function(card) {
    card.addEventListener("mouseover", function() {
      cards.forEach(function(soloCard) {
        if (soloCard !== card) {
          soloCard.classList.add("card-opacity");
        } else {
          soloCard.classList.add("card-selected");
        }
      });
    });

    card.addEventListener("mouseleave", function() {
      cards.forEach(function(soloCard) {
        soloCard.classList.remove("card-opacity");
        soloCard.classList.remove("card-selected");
        });
    });
});

// Make call-to-action button wiggle on mouseover
ctaButton.addEventListener("mouseover", function() {
  l("oi");
  ctaButton.classList.add("shaker");
  setTimeout(function(){
  ctaButton.classList.remove("shaker");
  }, 200);
});

// Scroll go-to on click product
productLink.addEventListener("click", function() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

// Scroll go-to on click features
featuresLink.addEventListener("click", function() {
  window.scroll({
    top: 921,
    left: 0,
    behavior: 'smooth'
  });
});

// Scroll go-to on click pricing
pricingLink.addEventListener("click", function() {
  window.scroll({
    top: 1846,
    left: 0,
    behavior: 'smooth'
  });
});

// Scroll update active elements
let currentScroll = "product";
document.addEventListener("scroll", function() {
  let scrollTopNow = window.pageYOffset;
  if (scrollTopNow >= 0 && scrollTopNow < 920) {
    if (currentScroll !== "product") {
      allLinks.forEach(function(link) {
        link.classList.remove("active");
      });
      productLink.classList.add("active");
      currentScroll = "product";
      questionMark.classList.remove("questionmark-highlight");
      navbar.classList.remove("navbar-endofpage");
    }
  } else if (scrollTopNow >= 920 && scrollTopNow < 1845) {
    if (currentScroll !== "features") {
      allLinks.

(function(link) {
        link.classList.remove("active");
      });
      featuresLink.classList.add("active");
      currentScroll = "features";
      questionMark.classList.remove("questionmark-highlight");
      navbar.classList.remove("navbar-endofpage");
    }
  } else if (scrollTopNow >= 1845 && scrollTopNow < 2825) {
    if (currentScroll !== "pricing") {
      allLinks.forEach(function(link) {
        link.classList.remove("active");
      });
      pricingLink.classList.add("active");
      currentScroll = "pricing";
      questionMark.classList.remove("questionmark-highlight");
      navbar.classList.remove("navbar-endofpage");
    }
  } else {
      allLinks.forEach(function(link) {
        link.classList.remove("active");
      });
      currentScroll = "";
      questionMark.classList.add("questionmark-highlight");
      navbar.classList.add("navbar-endofpage");
    }
});

// Support
helper.style.display = "none";

questionMark.addEventListener('mouseover', (event) => {
  helper.style.display = "";
  helper.style.opacity = '0';
  let opacity = 0;

  setInterval(() => {
    opacity += 0.02;
    helper.style.opacity = opacity.toString();
  }, 10);
});

questionMark.addEventListener('mouseleave', (event) => {
  helper.style.display = "none";
});


//Scroll main product cards
let scrollRight = 0;
setInterval(() => {
  mainProductScroll.scrollLeft += scrollRight;;
  }, 10);

mainProductRight.addEventListener('mouseover', (event) => {
  scrollRight = 10;
});

mainProductRight.addEventListener('mouseleave', (event) => {
  scrollRight = 0;
});

mainProductLeft.addEventListener('mouseover', (event) => {
  scrollRight = -10;
});

mainProductLeft.addEventListener('mouseleave', (event) => {
  scrollRight = 0;
});

//Scroll minor product cards
let minorScrollRight = 0;
setInterval(() => {
  minorProductScroll.scrollLeft += minorScrollRight;;
  }, 10);

minorProductRight.addEventListener('mouseover', (event) => {
  minorScrollRight = 10;
});

minorProductRight.addEventListener('mouseleave', (event) => {
  minorScrollRight = 0;
});

minorProductLeft.addEventListener('mouseover', (event) => {
  minorScrollRight = -10;
});

minorProductLeft.addEventListener('mouseleave', (event) => {
  minorScrollRight = 0;
});



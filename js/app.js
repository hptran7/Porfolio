const navSlide = () => {
  // DOM Elements
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navLinks");
  const navLinks = document.querySelectorAll(".navLinks li");

  burger.addEventListener("click", () => {
    // Toggle Nav for Mobile
    nav.classList.toggle("navActive");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.4
        }s`;
      }
    });

    // Burger/Close Button Animation
    burger.classList.toggle("toggleOpenClose");
  });
};
navSlide();

// Smooth Scrolling
const navScroll = new SmoothScroll('nav ul li a[href*="#"]', {
  speed: 800,
});

const projectBtnScroll = new SmoothScroll('header div a[href*="#"]', {
  speed: 2300,
});

const navLogo = new SmoothScroll('nav div a[href*="#"]', {
  speed: 1200,
});

// modal function

const modal1 = document.getElementById("simpleModal1");
const modal2 = document.getElementById("simpleModal2");
const modal3 = document.getElementById("simpleModal3");
const modal4 = document.getElementById("simpleModal4");
const modal5 = document.getElementById("simpleModal5");
const modalBtn1 = document.getElementById("modalBtn1");
const modalBtn2 = document.getElementById("modalBtn2");
const modalBtn3 = document.getElementById("modalBtn3");
const modalBtn4 = document.getElementById("modalBtn4");
const modalBtn5 = document.getElementById("modalBtn5");
const closeBtn = document.getElementsByClassName("closeBtn");

//listion for open click and close
modalBtn1.addEventListener("click", openModal1);
closeBtn[0].addEventListener("click", closeModal1);

modalBtn2.addEventListener("click", openModal2);
closeBtn[1].addEventListener("click", closeModal2);

modalBtn3.addEventListener("click", openModal3);
closeBtn[2].addEventListener("click", closeModal3);

modalBtn4.addEventListener("click", openModal4);
closeBtn[3].addEventListener("click", closeModal4);

modalBtn5.addEventListener("click", openModal5);
closeBtn[4].addEventListener("click", closeModal5);

function openModal1() {
  modal1.style.display = "block";
}

function closeModal1() {
  modal1.style.display = "none";
}

function openModal2() {
  modal2.style.display = "block";
}

function closeModal2() {
  modal2.style.display = "none";
}

function openModal3() {
  modal3.style.display = "block";
}

function closeModal3() {
  modal3.style.display = "none";
}

function openModal4() {
  modal4.style.display = "block";
}

function closeModal4() {
  modal4.style.display = "none";
}

function openModal5() {
  modal5.style.display = "block";
}

function closeModal5() {
  modal5.style.display = "none";
}

// function to close modal if outside click

window.addEventListener("click", outsideClick);

function outsideClick(e) {
  if (
    e.target == simpleModal1 ||
    e.target == simpleModal2 ||
    e.target == simpleModal3 ||
    e.target == simpleModal4 ||
    e.target == simpleModal5
  ) {
    closeModal1();
    closeModal2();
    closeModal3();
    closeModal4();
    closeModal5();
  }
}

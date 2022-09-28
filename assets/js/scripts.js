"use strict";

// -- ADD EVENT ON ELEMENT -- //
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

// -- TOGGLE NANBAR -- //
const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
};

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
};

addEventOnElem(navLinks, "click", closeNavbar);

// -- HEADER ACTIVE -- //
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (this.window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

// -- MODAL -- //

const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

// -- MODAL-1th -- //
const modal1 = document.querySelector(".modal-1th");
const btnOpenModal1 = document.querySelectorAll(".show-modal-1th");

const openModal1 = function () {
  modal1.style.opacity = 1;
  modal1.style.visibility = "visible";
  modal1.style.top = "0";

  overlay.style.opacity = "80%";
  overlay.style.visibility = "visible";

  body.style.overflow = "hidden";
  body.style.height = "100%";
};

for (let i = 0; i < btnOpenModal1.length; i++)
  btnOpenModal1[i].addEventListener("click", openModal1);

const closeModal1 = function () {
  modal1.style.opacity = 0;
  modal1.style.visibility = "hidden";
  modal1.style.top = "-20rem";

  overlay.style.opacity = "0%";
  overlay.style.visibility = "hidden";

  body.style.overflow = "auto";
  body.style.height = "autos";
};

overlay.addEventListener("click", closeModal1);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal1();
  }
});

// -- MODAL-2th -- //
const modal2 = document.querySelector(".modal-2th");
const btnOpenModal2 = document.querySelectorAll(".show-modal-2th");

const openModal2 = function () {
  modal2.style.opacity = 1;
  modal2.style.visibility = "visible";
  modal2.style.top = "0";

  overlay.style.opacity = "80%";
  overlay.style.visibility = "visible";

  body.style.overflow = "hidden";
  body.style.height = "100%";
};

for (let i = 0; i < btnOpenModal2.length; i++)
  btnOpenModal2[i].addEventListener("click", openModal2);

const closeModal2 = function () {
  modal2.style.opacity = 0;
  modal2.style.visibility = "hidden";
  modal2.style.top = "-20rem";

  overlay.style.opacity = "0%";
  overlay.style.visibility = "hidden";

  body.style.overflow = "auto";
  body.style.height = "autos";
};

overlay.addEventListener("click", closeModal2);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal2();
  }
});

// -- MODAL-3th -- //
const modal3 = document.querySelector(".modal-3th");
const btnOpenModal3 = document.querySelectorAll(".show-modal-3th");

const openModal3 = function () {
  modal3.style.opacity = 1;
  modal3.style.visibility = "visible";
  modal3.style.top = "0";

  overlay.style.opacity = "80%";
  overlay.style.visibility = "visible";

  body.style.overflow = "hidden";
  body.style.height = "100%";
};

for (let i = 0; i < btnOpenModal3.length; i++)
  btnOpenModal3[i].addEventListener("click", openModal3);

const closeModal3 = function () {
  modal3.style.opacity = 0;
  modal3.style.visibility = "hidden";
  modal3.style.top = "-20rem";

  overlay.style.opacity = "0%";
  overlay.style.visibility = "hidden";

  body.style.overflow = "auto";
  body.style.height = "autos";
};

overlay.addEventListener("click", closeModal3);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal3();
  }
});

// -- MODAL-4th -- //
const modal4 = document.querySelector(".modal-4th");
const btnOpenModal4 = document.querySelectorAll(".show-modal-4th");

const openModal4 = function () {
  modal4.style.opacity = 1;
  modal4.style.visibility = "visible";
  modal4.style.top = "0";

  overlay.style.opacity = "80%";
  overlay.style.visibility = "visible";

  body.style.overflow = "hidden";
  body.style.height = "100%";
};

for (let i = 0; i < btnOpenModal4.length; i++)
  btnOpenModal4[i].addEventListener("click", openModal4);

const closeModal4 = function () {
  modal4.style.opacity = 0;
  modal4.style.visibility = "hidden";
  modal4.style.top = "-20rem";

  overlay.style.opacity = "0%";
  overlay.style.visibility = "hidden";

  body.style.overflow = "auto";
  body.style.height = "autos";
};

overlay.addEventListener("click", closeModal4);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal4();
  }
});

// -- MODAL-5th -- //
const modal5 = document.querySelector(".modal-5th");
const btnOpenModal5 = document.querySelectorAll(".show-modal-5th");

const openModal5 = function () {
  modal5.style.opacity = 1;
  modal5.style.visibility = "visible";
  modal5.style.top = "0";

  overlay.style.opacity = "80%";
  overlay.style.visibility = "visible";

  body.style.overflow = "hidden";
  body.style.height = "100%";
};

for (let i = 0; i < btnOpenModal5.length; i++)
  btnOpenModal5[i].addEventListener("click", openModal5);

const closeModal5 = function () {
  modal5.style.opacity = 0;
  modal5.style.visibility = "hidden";
  modal5.style.top = "-20rem";

  overlay.style.opacity = "0%";
  overlay.style.visibility = "hidden";

  body.style.overflow = "auto";
  body.style.height = "autos";
};

overlay.addEventListener("click", closeModal5);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal5();
  }
});

// -- MODAL-6th -- //
const modal6 = document.querySelector(".modal-6th");
const btnOpenModal6 = document.querySelectorAll(".show-modal-6th");

const openModal6 = function () {
  modal6.style.opacity = 1;
  modal6.style.visibility = "visible";
  modal6.style.top = "0";

  overlay.style.opacity = "80%";
  overlay.style.visibility = "visible";

  body.style.overflow = "hidden";
  body.style.height = "100%";
};

for (let i = 0; i < btnOpenModal6.length; i++)
  btnOpenModal6[i].addEventListener("click", openModal6);

const closeModal6 = function () {
  modal6.style.opacity = 0;
  modal6.style.visibility = "hidden";
  modal6.style.top = "-20rem";

  overlay.style.opacity = "0%";
  overlay.style.visibility = "hidden";

  body.style.overflow = "auto";
  body.style.height = "autos";
};

overlay.addEventListener("click", closeModal6);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal6();
  }
});

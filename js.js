"use strict";

const navico = document.querySelector("#header .navico");
const ul = document.querySelector("header ul");
const tel = document.querySelector(".tel");
const icon = navico.querySelector("i");
let menuOpen = false;

navico.addEventListener("click", function () {
    ul.classList.toggle("active");
    menuOpen = !menuOpen;

    if (menuOpen) {
        tel.style.backgroundColor = "white";
        icon.style.color = "black";
    } else {
        tel.style.backgroundColor = "rgba(255, 255, 255, 0)";
        icon.style.color = "";
    }
});

window.addEventListener('scroll', function () {
    if (window.scrollY > 20 || menuOpen) {
        tel.style.backgroundColor = "white";
        icon.style.color = "black";
    } else {
        tel.style.backgroundColor = "rgba(255, 255, 255, 0)";
        icon.style.color = "";
    }
});

window.addEventListener('scroll', function () {
    const header = document.querySelector('#header');

    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('#header');
    header.classList.remove('scrolled');
});

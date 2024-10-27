"use strict";

const navico = document.querySelector("#header .navico")
const ul = document.querySelector("header ul")

navico.addEventListener("click", function () {
    ul.classList.toggle("active")
})
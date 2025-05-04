"use strict";
const menuButton = document.getElementById("menu");
const closeButton = document.getElementById("close");
const sideBar = document.getElementById("sideBar");

menuButton.addEventListener("click", function () {
  sideBar.style.display = "block";
});

closeButton.addEventListener("click", function () {
  sideBar.style.display = "none";
});

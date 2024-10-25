"use strict";
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const blurBackground = document.querySelector(".blur-background");

// Add event listener to hamburger icon
hamburger.addEventListener("click", () => {
  // Toggle nav menu visibility
  navMenu.classList.toggle("animate");
  navMenu.style.display = navMenu.style.display === "block" ? "none" : "block";

  // Toggle hamburger icon animation
  hamburger.classList.toggle("active");

  // Toggle blur background visibility
  blurBackground.classList.toggle("active");
  blurBackground.style.opacity =
    blurBackground.style.opacity === "1" ? "0" : "1";
  blurBackground.style.pointerEvents =
    blurBackground.style.pointerEvents === "auto" ? "none" : "auto";
});

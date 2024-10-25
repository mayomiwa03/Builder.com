"use strict";

// Set timeout duration Splash screen(in milliseconds)
const timeoutDuration = 2000;

// Get splash screen and main content elements
const splashScreen = document.getElementById("splash-screen");
const mainContent = document.getElementById("main-content");

// Hide splash screen and show main content after timeout
setTimeout(() => {
  splashScreen.style.display = "none";
  mainContent.style.display = "block";
}, timeoutDuration);

// Mobile nav
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

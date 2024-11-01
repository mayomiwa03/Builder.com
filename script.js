"use strict";
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const logInButton = document.querySelector(".log-in");
const logInDropdown = document.querySelector(".log-in-dropdown");
const signUpButton = document.querySelector(".sign-up");
const signUpDropdown = document.querySelector(".sign-up-dropdown");

// Hamburger menu toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Log in dropdown toggle
logInButton.addEventListener("click", () => {
  logInDropdown.classList.toggle("active");
});

// Sign up dropdown toggle
signUpButton.addEventListener("click", () => {
  signUpDropdown.classList.toggle("active");
});

// Close dropdowns when clicking outside
document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  }

  if (!logInDropdown.contains(e.target) && !logInButton.contains(e.target)) {
    logInDropdown.classList.remove("active");
  }

  if (!signUpDropdown.contains(e.target) && !signUpButton.contains(e.target)) {
    signUpDropdown.classList.remove("active");
  }
});

// SPLASH SCREEN
// Set timeout duration (in milliseconds)
const timeoutDuration = 3000;

// Get splash screen and main content elements
const splashScreen = document.getElementById("splash-screen");
const mainContent = document.getElementById("main-content");

// Hide splash screen and show main content after timeout
setTimeout(() => {
  splashScreen.style.display = "none";
  mainContent.style.display = "block";
}, timeoutDuration);

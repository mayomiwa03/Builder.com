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

// go to home whenever logo is clicked

const home = document.querySelector(".logo");

home.addEventListener("click", () => {
  window.location.href = "index.html";
});

// hero button goes to log in/sign up page
const heroButton = document.querySelector(".hero-btn");

heroButton.addEventListener("click", () => {
  window.location.href = "start.html";
});

// footer dropdown
document.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the link from navigating

    const dropdown = toggle.nextElementSibling;

    // Toggle the dropdown's visibility
    if (dropdown.style.maxHeight) {
      dropdown.style.maxHeight = null; // Collapse dropdown
    } else {
      dropdown.style.maxHeight = dropdown.scrollHeight + "px"; // Expand dropdown
    }
  });
});

// set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

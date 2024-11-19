"use strict";
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navItems = document.querySelectorAll(".nav-menu li"); // Select all list items

const logInButton = document.querySelector(".log-in");
const logInDropdown = document.querySelector(".log-in-dropdown");
const signUpButton = document.querySelector(".sign-up");
const signUpDropdown = document.querySelector(".sign-up-dropdown");

// Hamburger menu toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
// Close nav when clicking outside list items
document.addEventListener("click", (event) => {
  const isClickOnHamburger = hamburger.contains(event.target);
  const isClickOnNavItem = Array.from(navItems).some((item) =>
    item.contains(event.target)
  );

  if (!isClickOnHamburger && !isClickOnNavItem) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
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
document.addEventListener("DOMContentLoaded", () => {
  const splashScreen = document.getElementById("splash-screen");
  const splashVideo = document.getElementById("splash-video");
  const mainContent = document.getElementById("main-content");

  // Check if the splash screen has already been shown
  if (!sessionStorage.getItem("splashShown")) {
    splashScreen.style.display = "flex";
    mainContent.style.display = "none";

    // Listen for the video to finish
    splashVideo.addEventListener("ended", () => {
      splashScreen.style.display = "none";
      mainContent.style.display = "block";

      // Set a flag in session storage
      sessionStorage.setItem("splashShown", "true");
    });
  } else {
    splashScreen.style.display = "none";
    mainContent.style.display = "block";
  }
});
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

// just testing form
document
  .getElementById("sign-in-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();

    // Get the error message element
    const errorMessage = document.getElementById("error-message");

    // Clear previous error messages
    errorMessage.textContent = "";

    // Validate input
    if (!username || !password) {
      errorMessage.textContent = "Both fields are required.";
      return;
    }

    if (!phoneNumber || !password) {
      errorMessage.textContent = "Both fields are required.";
      return;
    }
    // Simulated authentication
    if (username === "admin" && password === "password123") {
      alert("Sign In Successful!");
      errorMessage.textContent = ""; // Clear any previous error
    } else {
      errorMessage.textContent = "Invalid username or password.";
    }
  });

// set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

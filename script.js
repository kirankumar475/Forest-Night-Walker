/** script.js — Basic Interactivity and Form Validation **/

document.addEventListener("DOMContentLoaded", () => {
  // ========== Mobile Menu Toggle ==========
  const menuToggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector("nav ul");

  if (menuToggle && navList) {
    menuToggle.addEventListener("click", () => {
      navList.classList.toggle("active");
    });
  }

  // ========== Contact Form Validation ==========
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = contactForm.querySelector("input[name='name']").value.trim();
      const email = contactForm.querySelector("input[name='email']").value.trim();
      const message = contactForm.querySelector("textarea[name='message']").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      alert("Thank you! Your message has been submitted.");
      contactForm.reset();
    });
  }

  // ========== Login Form Validation ==========
  const loginForm = document.querySelector("#login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = loginForm.querySelector("input[name='email']").value.trim();
      const password = loginForm.querySelector("input[name='password']").value.trim();

      if (!email || !password) {
        alert("Please enter both email and password.");
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      alert("Login successful!");
      loginForm.reset();
    });
  }
});

// ========== Show/Hide Login Box ==========
function showLogin() {
  document.getElementById("loginBox").classList.add("active");
}

function hideLogin() {
  document.getElementById("loginBox").classList.remove("active");
}

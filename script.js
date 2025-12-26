// MOBILE NAV
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// THEME TOGGLE
document.getElementById("theme-toggle").onclick = () =>
  document.body.classList.toggle("light");

// TYPEWRITER EFFECT
const words = ["a Full-Stack Developer", "a Designer", "a Problem Solver"];
let i = 0, j = 0, deleting = false;

const typewriter = document.getElementById("typewriter");

setInterval(() => {
  const word = words[i];

  typewriter.textContent = deleting
    ? word.substring(0, j--)
    : word.substring(0, j++);

  if (!deleting && j === word.length + 1) {
    deleting = true;
    setTimeout(() => {}, 500);
  }

  if (deleting && j === 0) {
    deleting = false;
    i = (i + 1) % words.length;
  }
}, 120);

// SCROLL ANIMATION
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
});

document.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));

// GOOGLE FORM SUBMISSION SUCCESS HANDLER
var submitted = false;

function notifySuccess() {
  if (submitted) {
    alert("Message sent successfully! Thank you.");

    // Clear fields after submit
    document.getElementById("contact-form").reset();

    submitted = false;
  }
}
// EMAIL VALIDATION BEFORE SUBMIT
document.getElementById("contact-form").addEventListener("submit", function (e) {

  const emailField = document.getElementById("email-field");
  const emailError = document.getElementById("email-error");
  const email = emailField.value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    e.preventDefault();              // Stop the form
    submitted = false;               // Stop success popup
    emailField.classList.add("invalid");
    emailError.style.display = "block";
    emailError.classList.add("fade-in-error");
    return;
  }

  // If valid email, remove error UI and submit
  emailField.classList.remove("invalid");
  emailError.style.display = "none";

  submitted = true; // Allow Google Form submit
});

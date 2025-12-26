// MOBILE NAV
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// THEME TOGGLE
document.getElementById("theme-toggle").onclick = () =>
  document.body.classList.toggle("light");

// CONTACT FORM
document.getElementById("contact-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = new FormData(e.target).get("name");
  alert("Thanks for reaching out, " + name + ".");
  e.target.reset();
});

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

// SCROLL ANIMATION TRIGGER
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
});

document.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
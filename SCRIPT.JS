// Efeito de digitação
function typeEffect(element, speed) {
  const text = element.innerHTML;
  element.innerHTML = "";
  let i = 0;
  const timer = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

const sideMenu = document.querySelector(".side-menu");
sideMenu.addEventListener("mouseenter", () => {
  sideMenu.style.width = "350px";
});

sideMenu.addEventListener("mouseleave", () => {
  sideMenu.style.width = "300px";
});


document.addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll(".titulo");
  titles.forEach((title) => typeEffect(title, 50));

  const sections = document.querySelectorAll(".content-box");
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transition = "opacity 1s ease";
  });

  window.addEventListener("scroll", () => {
    sections.forEach((section) => {
      const position = section.getBoundingClientRect().top;
      if (position < window.innerHeight) {
        section.style.opacity = "1";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const contentBoxes = document.querySelectorAll(".content-box");

  window.addEventListener("scroll", () => {
    contentBoxes.forEach((box) => {
      const boxPosition = box.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (boxPosition < windowHeight - 100) {
        box.style.opacity = "1";
        box.style.transform = "translateY(0)";
      } else {
        box.style.opacity = "0";
        box.style.transform = "translateY(20px)";
      }
    });
  });
});
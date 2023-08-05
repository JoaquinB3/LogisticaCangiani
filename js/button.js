const breakpoint = 768;

function addHamburgerButton() {
  const menu = document.querySelector(".menu");
  const hamburgerBtn = document.createElement("button");
  hamburgerBtn.id = "hamburger-btn";
  hamburgerBtn.innerHTML = "&#9776;";
  menu.appendChild(hamburgerBtn);
}

function removeHamburgerButton() {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  if (hamburgerBtn) {
    hamburgerBtn.remove();
  }
}

function checkWindowSize() {
  if (window.innerWidth <= breakpoint) {
    addHamburgerButton();
  } else {
    removeHamburgerButton();
  }
}

window.addEventListener("load", checkWindowSize);
window.addEventListener("resize", checkWindowSize);


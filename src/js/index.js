const hamburger = document.body.querySelector(".header__hamburger");
const header = document.body.querySelector(".header");
const menu = document.body.querySelector(".header__menu");
function toggleHamburger() {
  hamburger.classList.toggle("header__hamburger_opened");
  header.classList.toggle("header_opened");
  menu.classList.toggle("closed");
}
hamburger.addEventListener("click", () => {
  toggleHamburger();
});
menu.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    toggleHamburger();
  }
});

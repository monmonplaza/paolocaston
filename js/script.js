/* RESPONSIVE MENU*/
const navToggle = document.querySelector("#navToggle");
const nav = document.querySelector(".header__nav");
const body = document.querySelector("body");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
  body.classList.toggle("show");
});

/* PROJECT FILTER */
const prjLinks = document.querySelectorAll(".prj__link");
const prjLists = document.querySelectorAll(".project__card");

prjLinks.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    prjLists.forEach((list) => {
      if (item.getAttribute("data-link") == list.getAttribute("data-cat"))
        list.style.display = "block";
      else {
        list.style.display = "none";
      }
      if (item.getAttribute("data-link") == "all") list.style.display = "block";
    });
  });
});

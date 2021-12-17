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

/* ANIMATION */

// HERO & SERVICES
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".animate",
  },
});

tl.from(".header__nav ul li", { y: -10, opacity: 0, duration: 1 });

tl.from(".hero__content", {
  x: -200,
  opacity: 0,
  ease: "power1.inOut",
  duration: 0.5,
});
tl.from(".hero__img", {
  x: 200,
  opacity: 0,
  ease: "power1.inOut",
  duration: 0.5,
});
tl.from(".services__wrapper span", {
  opacity: 0,
  ease: "power1.inOut",
  duration: 0.2,
});

tl.from(".hero .arrow", { opacity: 0, ease: "power1.inOut", duration: 0.3 });

tl.from(".services__listitem", { x: -10, opacity: 0, stagger: 0.3 });

//PROJECT

let prj = gsap.timeline({
  scrollTrigger: {
    trigger: ".project",
    start: "top 90%",
  },
});

prj.from(".block__header", { opacity: 0, ease: "power1.inOut", duration: 0.5 });
prj.from(".project__nav ul li", {
  x: -10,
  opacity: 0,
  duration: 0.3,
});
prj.from(".project__card", { y: -20, opacity: 0, duration: 1, stagger: 0.3 });
prj.from(".loadmore", { y: -20, opacity: 0 });

// CLIENT

let client = gsap.timeline({
  scrollTrigger: {
    trigger: ".client",
    start: "top 80%",
  },
});

// client.from(".client__header", {
//   x: -20,
//   opacity: 0,
//   ease: "power5.inOut",
//   duration: 0.5,
// });

client.from(".client__listitem", {
  x: -20,
  opacity: 0,
  ease: "power5.inOut",
  duration: 0.5,
  stagger: 0.2,
});

// TEAM

let team = gsap.timeline({
  scrollTrigger: {
    trigger: ".team",

    start: "top 80%",
  },
});

// gsap.from(".team__header", {
//   x: -20,
//   opacity: 0,
//   ease: "power5.inOut",
//   duration: 0.5,
// });

gsap.from(".team__listitem", {
  x: -20,
  opacity: 0,
  ease: "power5.inOut",
  duration: 0.5,
  stagger: 0.3,
});

// CHAT
gsap.from(".chat__wrapper", {
  scrollTrigger: {
    trigger: ".chat",
  },
  x: -20,
  opacity: 0,
  ease: "power5.inOut",
  duration: 0.5,
  stagger: 0.3,
});

// FOOTER

let footer = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer",
    label: "footer",
    start: "top 100%",
  },
});

footer.from(".branding", {
  x: -20,
  opacity: 0,
  ease: "power5.inOut",
  duration: 0.5,
  stagger: 0.3,
});

footer.from(".toc", {
  x: -20,
  opacity: 0,
  ease: "power5.inOut",
  duration: 0.5,
});

footer.from(".footer__nav", {
  x: -20,
  opacity: 0,
  ease: "power5.inOut",
  duration: 0.5,
});

footer.from(".emailme", {
  x: -20,
  opacity: 0,
  ease: "power5.inOut",
  duration: 0.5,
});

footer.from(".copyright__wrapper p", {
  x: -20,
  opacity: 0,
  ease: "power5.inOut",
  duration: 0.5,
});

footer.from(".copyright__wrapper ul li", {
  x: -20,
  opacity: 0,
  ease: "power5.inOut",
  duration: 0.5,
  stagger: 0.2,
});

// прокрутка

let windowScrollTop = window.pageYOffset;
let windowScrollLeft = window.pageXOffset;
console.log(windowScrollTop, windowScrollLeft, "px");

// let pg = document.querySelector(".page_section_1").pageYOffset;
// console.log(pg);

// Find coordinates //

// let block = document.querySelector(".menu_link");
let section = document.querySelector(".page_section_3");
let position_sec = section.offsetTop;
console.log(position_sec, "your block is here");

// Scroll div //
let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");
let p3 = document.querySelector(".p3");

let section1 = document.querySelector(".page_section_1");
let section2 = document.querySelector(".page_section_2");
let section3 = document.querySelector(".page_section_3");

p1.addEventListener("click", scrl1);
p2.addEventListener("click", scrl2);
p3.addEventListener("click", scrl3);

function scrl1() {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

function scrl2() {
  event.preventDefault();
  window.scrollTo({
    top: 1928 - 155,
    left: 0,
    behavior: "smooth",
  });
}

function scrl3() {
  event.preventDefault();
  window.scrollTo({
    top: 3782 - 155,
    left: 0,
    behavior: "smooth",
  });
}

// Modal with scrolling //
let windowMenu = document.querySelector(".modal_window");
// Modal //
let openMenu = document.querySelector(".open_menu");
let closeMenu = document.querySelector(".close_menu");
let menu = document.querySelector("#ul");
let modalContent = document.querySelector(".modal_content");
let modalBg = document.querySelector(".modal_bg");

window.addEventListener("scroll", () => {
  //   console.log("scrolling");
  let scrollable = document.documentElement.scrollHeight - window.innerHeight;
  let scrolled = window.scrollY;

  if (Math.ceil(scrolled) === scrollable) {
    menu.style.display = "block";
    modalContent.style.display = "block";
    modalBg.style.display = "block";

    setTimeout(() => {
      modalContent.style.opacity = "1";
      modalBg.style.opacity = "1";
    }, 200);
  }
});

closeMenu.onclick = () => {
  modalContent.style.opacity = "0";
  modalBg.style.opacity = "0";
  setTimeout(() => {
    menu.style.display = "none";
    modalContent.style.display = "none";
    modalBg.style.display = "none";
  }, 200);
};

import "./slick.min.js";

window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu__list"),
    menuItem = document.querySelectorAll(".menu__item"),
    hamburger = document.querySelector(".burger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("burger_active");
    menu.classList.toggle("menu__list_active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("burger_active");
      menu.classList.toggle("menu__list_active");
    });
  });
});

// Slick slider

$(".testimoni__inner").slick({
  dots: true,
  speed: 1200,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
});
// Выпадающее меню Аккордеон
$(document).ready(function () {
  $(".room__arrow").each(function (i) {
    $(this).on("click", function (e) {
      e.preventDefault();
      $(".room__text-menu").eq(i).toggleClass("room__text-menu_active");
      $(".room__arrow").eq(i).toggleClass("room__arrow_active");
    });
  });
});

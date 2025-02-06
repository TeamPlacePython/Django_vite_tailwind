import "vite/modulepreload-polyfill";

// Entry point for CSS styles
import "../css/styles.css";

// Example with a swiper slider
import Swiper from "swiper/bundle";
// Swiper styles
import "swiper/css/bundle";

// Initialization of our swiper slider
export const swiper = new Swiper(".swiper", {
  // Default parameters
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 30,

  centerInsufficientSlides: true,

  breakpoints: {
    // when window width is >= 992px
    992: {
      speed: 2000,
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
    // when window width is >= 1200px
    1200: {
      speed: 3000,
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
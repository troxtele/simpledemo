// const anime = document.querySelectorAll("section");
// const secOne = document.querySelectorAll(".sec_one");

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       console.log(secOne);
//       secOne.forEach((el) => {
//         console.log("inside");
//         el.classList.add("anime");
//       });
//     } else {
//       secOne.forEach((el) => {
//         el.classList.remove("anime");
//       });
//     }
//   });
// });

// anime.forEach((a) => observer.observe(a));

var swiper = new Swiper(".swiper-container", {
  direction: "vertical",
  slidesPerView: 1,
  paginationClickable: true,
  spaceBetween: 0,
  mousewheelControl: true,
  parallax: true,
  speed: 1300,
});

const wrapper = document.querySelector(".swiper-wrapper");
const originalTransform = window.getComputedStyle(wrapper).transform;
// const translate = swiper.translate;
let translate;

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "3",
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  speed: 4500,
  touchStartPreventDefault: false,
});

wrapper.addEventListener("mouseover", () => {
  // Pause Swiper's autoplay
  // translate = swiper.translate;
  // swiper.autoplay.stop();
  // // Get the current transform value
  // const currentTransform = window.getComputedStyle(wrapper).transform;
  // // Apply the current transform to the wrapper
  // wrapper.style.transitionDuration = '0ms';
  // wrapper.style.transform = currentTransform;
});

wrapper.addEventListener("mouseout", () => {
  // Resume the transition
  // wrapper.style.transitionDuration = '4500ms';
  //    // Resume Swiper's autoplay
  // console.log(swiper);
  // swiper.autoplay.start();
  // wrapper.style.transform = `translate3d(${translate}px, 0px, 0px)`;
});

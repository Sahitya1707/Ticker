const wrapper = document.querySelector("#ticker .swiper-wrapper");
const originalTransform = window.getComputedStyle(wrapper).transform;
const tickerItems = document.querySelectorAll(".swiper-slide");
// const translate = swiper.translate;
let translate;
let jsonData;
var swiper;

// below is the code to stop ticker when mouse is over
wrapper.addEventListener("mouseover", () => {
  console.log(swiper.translate);
  const currentTransform = window.getComputedStyle(wrapper).transform;
  wrapper.style.transitionDuration = "0ms";
  wrapper.style.transitionDelay = "0ms";
  wrapper.style.transform = currentTransform;
});

wrapper.addEventListener("mouseout", () => {
  // Resume the transition
  wrapper.style.transitionDuration = `${swiper.passedParams.speed}ms`;

  wrapper.style.transitionDelay = " ";
  wrapper.style.transform = `translate3d(${swiper.translate}px, 0px, 0px)`;
});
const fetchData = async () => {
  await fetch("../npm-ticker/data/data.json")
    .then((res) => res.json())
    .then((data) => {
      jsonData = data;
      jsonData.forEach((e, i) => {
        wrapper.innerHTML += `
       
         <div class="swiper-slide">
                <div class="swiper-ticker">
                    <img src=${e.imageUrl} class="aws" alt="" id=${e.id}>
                    <p>${e.description}</p>
                </div>
            </div>
        `;
      });
      //   initializing swiper only after fetching
      swiper = new Swiper(".mySwiper", {
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
    })
    .catch((err) => {
      console.log(err);
    });
};
// fetching the data
fetchData();

/**
 *  * Ticker 1.0.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 *
 *
 * Copyright 2024 Ds Digital Media
 *
 *
 *
 * Released on: July 31, 2024
 */

const parent_ticker_element = document.querySelector(".main-ticker");
const fetch_url_link = "../npm-ticker/data/data.json";

const initializeTicker = (parent_div, fetch_url) => {
  const wrapper_element = document.querySelector(
    `${parent_div} #ticker .swiper-wrapper`
  );

  const ticker_items = document.querySelectorAll(".swiper-slide");
  let translate_value;
  let json_data;
  let swiper_instance;

  // below is the code to stop ticker when mouse is over
  wrapper_element.addEventListener("mouseover", () => {
    // swiper_instance.autoplay.stop();
    console.log(swiper_instance.autoplay.timeLeft);
    const current_transform =
      window.getComputedStyle(wrapper_element).transform;
    wrapper_element.style.transitionDuration = "0ms";
    wrapper_element.style.transitionDelay = "0ms";
    wrapper_element.style.transform = current_transform;
  });

  wrapper_element.addEventListener("mouseout", () => {
    // Resume the transition
    // swiper_instance.params.autoplay.delay = 0;
    console.log(swiper_instance.autoplay.timeLeft);
    // console.log(swiper_instance);
    // swiper_instance.autoplay.start();
    wrapper_element.style.transitionDuration = `${swiper_instance.passedParams.speed}ms`;
    wrapper_element.style.transitionDelay = " ";
    wrapper_element.style.transform = `translate3d(${swiper_instance.translate}px, 0px, 0px)`;
  });

  const fetchData = async () => {
    await fetch(fetch_url)
      .then((response) => response.json())
      .then((data) => {
        json_data = data;
        json_data.forEach((item, index) => {
          wrapper_element.innerHTML += `
          <div class="swiper-slide">
            <div class="swiper-ticker">
              <img src=${item.imageUrl} class="aws" alt="" id=${item.id}>
              <p>${item.description}</p>
            </div>
          </div>
        `;
        });
        // initializing swiper only after fetching data
        swiper_instance = new Swiper(".mySwiper", {
          slidesPerView: "3",
          spaceBetween: 0,
          loop: true,
          autoplay: {
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            timeLeft: 0,
          },
          speed: 4500,
          touchStartPreventDefault: false,
          freeMode: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // fetching the data
  fetchData();
};
initializeTicker(".main-ticker", "../npm-ticker/data/data.json");

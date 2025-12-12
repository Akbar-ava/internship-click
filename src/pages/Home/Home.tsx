import type React from "react";
import "./Home.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Products from "../../products";
import Cart from "../../components/Cart/Cart";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const slide_img = [
  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  "https://images.unsplash.com/photo-1512496015851-a90fb38ba796",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
  "https://images.unsplash.com/photo-1556906781-9a412961c28c",
];

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);
  return (
    <>
      <div className="home container">
        <Swiper
          effect="creative"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          spaceBetween={24}
          navigation={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          creativeEffect={{
            prev: {
              translate: ["-120%", 0, -300],
              rotate: [0, 0, -20],
            },
            next: {
              translate: ["120%", 0, -300],
              rotate: [0, 0, 20],
            },
          }}
          className="mySwiper"
        >
          {slide_img.map((img, item) => {
            return (
              <SwiperSlide key={item}>
                <img src={img} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Products></Products>
        <div className="home__cart" id="cart">
          <Cart />
        </div>
      </div>
    </>
  );
};

export default Home;

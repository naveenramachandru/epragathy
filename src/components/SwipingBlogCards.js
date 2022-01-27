import React from "react";
import * as S from "./styles/HomePagestyles";
import BlogCard from "./BlogCard";
import { Swiper, SwiperSlide } from "swiper/react";

import Battery from "../assets/images/roberto-sorin-ZZ3qxWFZNRg-unsplash.jpg";
import Gaget from "../assets/images/timothy-hales-bennett-OwvRB-M3GwE-unsplash.jpg";
import LightBulb from "../assets/images/nick-fewings-e9ygr3coiRI-unsplash.jpg";
import SwiperCore, {
  Navigation,
  Pagination,
  Controller,
  Thumbs,
  Autoplay,
  EffectFade,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
// import "swiper/swiper-bundle.css";

SwiperCore.use([
  Navigation,
  Pagination,
  Controller,
  Thumbs,
  Autoplay,
  EffectFade,
]);

const SwipingBlogCards = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <S.BlogCard>
            <BlogCard
              image={LightBulb}
              header="Hard Drive, Flash Drive & SSD Destruction "
              content="Clients can simply schedule their hard drive destruction online and through our website."
            />
          </S.BlogCard>
        </SwiperSlide>
        <SwiperSlide>
          <S.BlogCard>
            <BlogCard
              image={Battery}
              header="Hard Drive, Flash Drive & SSD Destruction "
              content="Clients can simply schedule their hard drive destruction online and through our website."
            />
          </S.BlogCard>
        </SwiperSlide>
        <SwiperSlide>
          <S.BlogCard>
            <BlogCard
              image={Gaget}
              header="Hard Drive, Flash Drive & SSD Destruction "
              content="Clients can simply schedule their hard drive destruction online and through our website."
            />
          </S.BlogCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwipingBlogCards;

import Breadcrumb from "components/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import useApp from "hooks/useApp";
import React, { useEffect, useState, useRef } from "react";
import { Navigation, Pagination, Controller } from "swiper";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";

const Achievements = () => {
  const { activeNav } = useApp();
  const swiper = useSwiper();
  const swiperSlide = useSwiperSlide();
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  // or use side effect

  return (
    <PageWrapper className="achievements" show={activeNav === "/#achievements"}>
      <Breadcrumb title="Achievements" />
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Controller]}
        navigation
        // navigation={{ nextEl: "#swiper-forward", prevEl: "#swiper-back" }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
      </Swiper>

      <button id="swiper-forward">Next</button>
      <button id="swiper-back">Prev</button>
    </PageWrapper>
  );
};

export default Achievements;

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Controller } from "swiper";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";

const Achievements = () => {
  const images = [
    "/assets/achievements/web-development.png",
    "/assets/achievements/LWS-Certificate.jpg",
    "/assets/achievements/spondon-certificate.png",
  ];

  return (
    <div className="px-4 py-6">
      <div className="hidden md:grid grid-cols-2 gap-6">
        {images.map((item) => (
          <div
            key={item}
            className="shadow-drop bg-white rounded-md overflow-hidden h-full"
          >
            <Image
              src={item}
              width={300}
              height={240}
              layout="responsive"
              alt={item}
            />
          </div>
        ))}
      </div>
      <Swiper
        className="block md:hidden"
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Controller]}
        navigation
      >
        {images.map((item) => (
          <SwiperSlide key={item}>
            <div className="shadow-drop bg-white rounded-md overflow-hidden h-full">
              <Image
                src={item}
                width={300}
                height={240}
                layout="responsive"
                alt={item}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Achievements;

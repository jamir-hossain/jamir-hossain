import React from "react";
import Image from "next/image";
import useApp from "hooks/useApp";
import Breadcrumb from "components/Breadcrumb";
import PageWrapper from "components/PageWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Controller } from "swiper";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";

const Achievements = () => {
  const { activeNav } = useApp();

  const images = [
    "/assets/achievements/web-development.png",
    "/assets/achievements/LWS-Certificate.jpg",
    "/assets/achievements/spondon-certificate.png",
  ];

  return (
    <PageWrapper
      className="achievements pt-[90px]"
      show={activeNav === "/#achievements"}
    >
      <Breadcrumb title="Achievements" />
      <div className="p-6">
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
    </PageWrapper>
  );
};

export default Achievements;

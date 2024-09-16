// import Swiper core and required modules
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import imgBook from "./../../assets/images/book.png";
import imgHardware from "./../../assets/images/harddrivecable.png";
import imgMac from "./../../assets/images/macbook-exposed.png";
import imgNetflix from "./../../assets/images/128px-Netflix-Logo.png";

const Banner = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide className="text-center rounded border-2 border-cyan-100 p-2">
        <img src={imgBook} alt="" />
      </SwiperSlide>
      <SwiperSlide className="text-center rounded border-2 border-cyan-100 p-2">
        <img src={imgHardware} alt="" />
      </SwiperSlide>
      <SwiperSlide className="text-center rounded border-2 border-cyan-100 p-2">
        <img src={imgMac} alt="" />
      </SwiperSlide>
      <SwiperSlide className="text-center rounded border-2 border-cyan-100 p-2">
        <img src={imgNetflix} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;

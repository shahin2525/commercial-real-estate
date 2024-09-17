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
    <div className="container pt-10 mx-auto rounded border-2 border-cyan-100">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="rounded border-2 border-cyan-100 w-[250px] h-[250px] px-10">
          <img
            className="mx-auto w-[850px] h-[550px] bg-green-200 "
            src={imgBook}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="rounded border-2 border-cyan-100 w-[250px] h-[250px]">
          <img
            className="mx-auto w-100% h-full bg-green-200 "
            src={imgHardware}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="rounded border-2 border-cyan-100 w-[250px] h-[250px]">
          <img
            className="mx-auto w-[850px] h-[250px] bg-green-200 "
            src={imgMac}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="rounded border-2 border-cyan-100 w-[250px] h-[250px]">
          <img
            className="mx-auto w-[850px] h-[350px] bg-green-200"
            src={imgNetflix}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

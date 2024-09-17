// import Swiper core and required modules
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Banner = () => {
  return (
    <div className="mt-6 pt-2 pb-0 flex items-center justify-center">
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
        <SwiperSlide className="rounded border-2 border-cyan-300">
          <img
            className="mx-auto w-full h-[2015px] bg-green-200 pb-0"
            src="https://i.ibb.co.com/fXqvbsb/rktkn-J7cl-I8q-J0x-A-unsplash.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="rounded border-2 border-cyan-100 pb-0">
          <img
            className="mx-auto w-full h-full bg-green-200 pb-0"
            src="https://i.ibb.co.com/zXFLDNf/sorasak-Kx-CJXXGsv9-I-unsplash.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="rounded border-2 border-cyan-100 pb-0">
          <img
            className="mx-auto w-full h-full pb-0"
            src="https://i.ibb.co.com/GHT0zJ4/mihail-ribkin-Vjml-Dje-PHj-E-unsplash.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

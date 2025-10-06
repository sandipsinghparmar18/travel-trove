import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const Carousel = ({ images = [] }) => {
  const swiperRef = useRef(null);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-64 flex items-center justify-center bg-gray-200 rounded-md">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className="w-full">
        <img
          src={images[0].urlHd}
          alt="hotel"
          className="w-full h-64 object-cover rounded-md"
        />
      </div>
    );
  }

  return (
    <div
      className="w-full relative group bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl shadow-lg overflow-hidden"
      onMouseEnter={() => swiperRef.current?.autoplay.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay.start()}
    >
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="rounded-xl"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative">
              <img
                src={src.urlHd}
                alt={`slide-${idx}`}
                className="w-full h-72 object-cover rounded-xl brightness-90 transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                <h2 className="text-lg md:text-xl font-semibold text-white font-sans tracking-wide">
                  Explore Beautiful Destinations
                </h2>
                <p className="text-sm text-gray-300 font-light">
                  Discover amazing travel experiences with us.
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Prev Button */}
      <button
        className="custom-prev absolute top-1/2 left-3 -translate-y-1/2 z-20 
        bg-gray-900/60 hover:bg-gray-700 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-md"
      >
        <ChevronLeft size={26} />
      </button>

      {/* Next Button */}
      <button
        className="custom-next absolute top-1/2 right-3 -translate-y-1/2 z-20 
        bg-gray-900/60 hover:bg-gray-700 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-md"
      >
        <ChevronRight size={26} />
      </button>
    </div>
  );
};

export default Carousel;

import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("testimonial.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);


  return (
    <div className="container m-auto">
      {/*-----------Heading-----------*/}
      <div className="py-10 mb-10">
        <h1 className="text-3xl md:text-4xl lg:text-7xl text-center text-black">
          Testimonial
        </h1>
        <div className="w-40 h-[2px] bg-deep-orange-600 m-auto mt-2"></div>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={25}
        slidesPerView={1}
        autoplay={true}
        grabCursor={true}
        delay={"100"}
        loop={true}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        >
        <div>
          {/*-----------Slider-------1-------*/}
          {testimonials.map((testimonial) => (
            <SwiperSlide>
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
              ></TestimonialCard>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonial;
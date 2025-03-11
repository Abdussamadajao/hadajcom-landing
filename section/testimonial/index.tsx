"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface TestimonialType {
  id: number;
  name: string;
  location: string;
  image: string;
  message: string;
}

interface PaginationType {
  clickable: boolean;
  renderBullet: (index: number, className: string) => string;
}

const Testimonial = () => {
  const testimonials: TestimonialType[] = [
    {
      id: 1,
      name: "Merry Jean",
      location: "Northampton, UK",
      image: "/images/merry-jean.jpg",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere",
    },
    {
      id: 2,
      name: "David Mark",
      location: "Glasgow, UK",
      image: "/images/david-mark.jpg",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere",
    },
    {
      id: 3,
      name: "Omari Zayn",
      location: "Leeds, UK",
      image: "/images/omari-zayn.jpg",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere",
    },
    {
      id: 4,
      name: "John Doe",
      location: "London, UK",
      image: "/images/john-doe.jpg",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere",
    },
    {
      id: 5,
      name: "Jane Smith",
      location: "Manchester, UK",
      image: "/images/jane-smith.jpg",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere",
    },
  ];

  const pagination: PaginationType = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <section className="bg-gray-100">
      <div className="container-custom  py-[50px]">
        <h1 className="text-[40px] font-semibold text-black uppercase text-center mb-10">
          Testimonials
        </h1>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={false}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide className="w-full" key={index}>
              {/* <div

              // className="w-full" // Show 3 slides at once
              > */}
              <div className=" px-5 py-3 rounded-lg border border-dark ">
                <p className=" mb-3 text-xl text-dark">{testimonial.message}</p>
                <div className="flex items-center  ">
                  <div className="w-16 h-16 overflow-hidden rounded-full mr-4 bg-gray-300"></div>
                  <div>
                    <h4 className="text-xl font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;

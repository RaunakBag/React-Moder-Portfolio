import React from "react";
import "./testimonials.css";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: 'https://lh4.googleusercontent.com/-0fW6iP8vvB0/AAAAAAAAAAI/AAAAAAAAAAA/-GG8KIBImT4/s55-p-k-no-ns-nd/photo.jpg',
    name: "B.Tech in Electronics and Communication Engineering",
    review:"Dr. Sudhir Chandra Sur Degree Engineering College",
    date:'2016-2020'
  },
  {
    avatar: 'https://lh5.googleusercontent.com/-VYRM7TMM_fw/AAAAAAAAAAI/AAAAAAAAAAA/HRunLAqRe5A/s55-p-k-no-ns-nd/photo.jpg',
    name: "Product Engineering",
    review:"School of Accelerate Learning",
    date:"2021"
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      {/* <h5>Review From Clients</h5> */}
      <h2>Education</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review, date }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h2 className="client__name">{name}</h2>
              <h4 className="client__review">{review}</h4>
              <h5 className="client__review">{date}</h5>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;

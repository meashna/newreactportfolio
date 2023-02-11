import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";


const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        " Had volunteerd robotic stores at KIDGLOVE- KOOTTU 2022 a Kerala Police Initiative to Protect Children in Cyberspace on July 26th, 2022",
    },
    {
      img: profilePic2,
      review:
        "Mentored thousands of students all over kerela  at IEDC Summit'22 for FIGMA . I just introduced about figma and teach how to use it . ",
    },
    {
      img: profilePic3,
      review:
        "As a volunteer at Hackaway pre-event . Also build website for the same...such a great experience❤️",
    },
    
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Some of my  </span>
        <span>Experience </span>
        <span> got from industry</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;

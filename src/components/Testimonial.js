import React from "react";
import Slider from "react-slick";
import TestimonialBglogo from "../assets/images/testimonialbglogo.svg";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };

  return (
    <div>
      <div className="testimonial">
        <img src={TestimonialBglogo} alt="" className="testimonial-bg" />
        <Slider {...settings}>
          <div className="testimonial-items">
            <p className="testimonial-items-comment">
              ‘’Lörem ipsum dekarade vast diasod nibelig decis, podat, i
              inrymning: bosobel sogt ögt. Vingen segt ponyst andronomi eling
              kontrafav. Reda agon, sobade höligt eller kvasir tir, laddstolpe
              med loheten pregt. Polyd delogi emedan stenons, semideplasam
              eurossa, nepögen.”
            </p>
            <p className="testimonial-items-author">Jurgen Kloop</p>
            <p className="testimonial-items-role">
              Product Management at Google Inc
            </p>
          </div>
          <div className="testimonial-items">
            <p className="testimonial-items-comment">
              ‘’Lörem ipsum dekarade vast diasod nibelig decis, podat, i
              inrymning: bosobel sogt ögt. Vingen segt ponyst andronomi eling
              kontrafav. Reda agon, sobade höligt eller kvasir tir, laddstolpe
              med loheten pregt. Polyd delogi emedan stenons, semideplasam
              eurossa, nepögen.”
            </p>
            <p className="testimonial-items-author">Jurgen Kloop</p>
            <p className="testimonial-items-role">
              Product Management at Google Inc
            </p>
          </div>
          <div className="testimonial-items">
            <p className="testimonial-items-comment">
              ‘’Lörem ipsum dekarade vast diasod nibelig decis, podat, i
              inrymning: bosobel sogt ögt. Vingen segt ponyst andronomi eling
              kontrafav. Reda agon, sobade höligt eller kvasir tir, laddstolpe
              med loheten pregt. Polyd delogi emedan stenons, semideplasam
              eurossa, nepögen.”
            </p>
            <p className="testimonial-items-author">Jurgen Kloop</p>
            <p className="testimonial-items-role">
              Product Management at Google Inc
            </p>
          </div>
        </Slider>
      </div>
      <p className="all-border all-border__testimonial"></p>
    </div>
  );
};

export default Testimonial;

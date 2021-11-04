import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export class Slide extends Component {
  render() {
    const slideConfigs = {
      arrows: false,
      slidesToShow: 4,
      infinite: false,
      swipeToSlide: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 835,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 560,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    return (
      <div>
        <Slider {...slideConfigs}>{this.props.children}</Slider>
      </div>
    );
  }
}

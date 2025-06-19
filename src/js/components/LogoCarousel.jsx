import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import logo1 from  "../../img/logonormalsinfondo.png";
import logo2 from  "../../img/logonormalsinfondo.png";
import logo3 from  "../../img/logonormalsinfondo.png";

const logos = [
  logo1,
  logo2,
  logo3
];

const LogoCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 3,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 }},
      { breakpoint: 600, settings: { slidesToShow: 2 }},
      { breakpoint: 480, settings: { slidesToShow: 1 }}
    ]
  };

  const duplicatedLogos = [...logos, ...logos];

  return (
    <div style={{ width: '100vw', overflow: 'hidden' }}>
      <Slider {...settings}>
        {duplicatedLogos.map((logo, index) => (
          <div key={index} style={{ padding: 0 }}>
            <img src={logo} alt={`logo-${index}`} style={{ width: '100%', maxHeight: '100px', objectFit: 'contain' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoCarousel;

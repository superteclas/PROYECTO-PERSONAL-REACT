import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import logo1 from  "../../img/logos/capo.png";
import logo2 from  "../../img/logos/black.png";
import logo3 from  "../../img/logos/consigo.png";
import logo4 from  "../../img/logos/eventime.webp";
import logo5 from  "../../img/logos/glitter.png";
import logo6 from  "../../img/logos/Marriot.svg";
import logo7 from  "../../img/logos/rock.png";
import logo8 from  "../../img/logos/tribu.png";
import logo9 from  "../../img/logos/polop.png";
import logo10 from  "../../img/logos/babalu.png";

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6, // index 5
  logo7,
  logo8, // index 7
  logo9,
  logo10,
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
    <div style={{ width: '100vw', overflow: 'hidden', backgroundColor: '#f8f9fa', padding: '1rem 0' }}>
      <Slider {...settings}>
        {duplicatedLogos.map((logo, index) => {
          // Tamaño base
          let imgStyle = {
            width: '100%',
            maxHeight: '100px',
            objectFit: 'contain',
          };

          // Aumentar tamaño de logo 6 (index 5)
          if (index % logos.length === 5) {
            imgStyle.maxHeight = '130px';
          }

          // Disminuir tamaño de logo 8 (index 7)
          if (index % logos.length === 7) {
            imgStyle.maxHeight = '70px';
          }

          return (
            <div key={index} style={{ padding: 0 }}>
              <img src={logo} alt={`logo-${index}`} style={imgStyle} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default LogoCarousel;

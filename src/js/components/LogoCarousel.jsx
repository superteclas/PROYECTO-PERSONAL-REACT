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
import logo11 from  "../../img/logos/adlibitum.png";
import logo12 from  "../../img/logos/Popladies.png";
import logo13 from "../../img/logos/rockbeat.png"
import logo14 from "../../img/logos/hive.png"

const logos = [
  logo1,
  logo2,
  logo3,
  logo13,
  logo5,
  logo6,
  logo7,
  logo8, 
  logo9,
  logo10,
  logo11,
  logo12,
  logo4,
  logo14,
  
  
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

          if (index % logos.length === 0) {
            imgStyle.maxHeight = '130px';
          }
          if (index % logos.length === 1) {
            imgStyle.maxHeight = '130px';
          }
          if (index % logos.length === 2) {
            imgStyle.maxHeight = '60px';
          }
          if (index % logos.length === 3) {
            imgStyle.maxHeight = '90px';
          }

          if (index % logos.length === 5) {
            imgStyle.maxHeight = '130px';
          }

         
          if (index % logos.length === 7) {
            imgStyle.maxHeight = '70px';
          }

          if (index % logos.length === 12) {
  imgStyle.maxHeight = '40px';
  imgStyle.marginTop = '19px';
}

if (index % logos.length === 13) {
            imgStyle.marginbottom = '100px';
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

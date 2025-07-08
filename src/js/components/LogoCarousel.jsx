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
import logo13 from  "../../img/logos/rockbeat.png";
import logo14 from  "../../img/logos/hive.png";

const logos = [
  logo1,  // capo
  logo2,  // black
  logo3,  // consigo
  logo13, // rockbeat
  logo5,  // glitter
  logo6,  // Marriot
  logo7,  // rock
  logo8,  // tribu
  logo9,  // polop
  logo10, // babalu
  logo11, // adlibitum
  logo12, // Popladies
  logo4,  // eventime
  logo14, // hive
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

  return (
    <div style={{ width: '100vw', overflow: 'hidden', backgroundColor: '#f8f9fa', padding: '1rem 0' }}>
      <Slider {...settings}>
        {logos.map((logo, index) => {
          let imgStyle = {
            width: '100%',
            maxHeight: '100px',
            objectFit: 'contain',
          };

          if (index === 0) {
            imgStyle.maxHeight = '130px'; // capo
          }
          if (index === 1) {
            imgStyle.maxHeight = '130px'; // black
          }
          if (index === 2) {
            imgStyle.maxHeight = '90px'; // consigo
          }
          if (index === 3) {
            imgStyle.maxHeight = '30px';
            imgStyle.marginTop = '25px'; // rockbeat
          }
          if (index === 4) {
            imgStyle.maxHeight = '100px'; // glitter
          }
          if (index === 5) {
            imgStyle.maxHeight = '130px'; // Marriot
          }
          if (index === 6) {
            imgStyle.maxHeight = '100px'; // rock
          }
          if (index === 7) {
            imgStyle.maxHeight = '60px';
            imgStyle.marginTop = '19px'; // tribu
          }
          if (index === 8) {
            imgStyle.maxHeight = '75px';
            imgStyle.marginTop = '19px'; // polop
          }
          if (index === 9) {
            imgStyle.maxHeight = '100px'; // babalu
          }
          if (index === 10) {
            imgStyle.maxHeight = '100px'; // adlibitum
          }
          if (index === 11) {
            imgStyle.maxHeight = '70px';
            imgStyle.marginTop = '19px'; // Popladies
          }
          if (index === 12) {
            imgStyle.maxHeight = '90px'; // eventime
            imgStyle.marginTop = '5px';
          }
          if (index === 13) {
            imgStyle.maxHeight = '70px';
            imgStyle.marginTop = '19px'; // hive
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

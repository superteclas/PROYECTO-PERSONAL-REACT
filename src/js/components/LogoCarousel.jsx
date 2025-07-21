import React from "react";
import "../../styles/carousel.css";

import logo1 from "../../img/logos/capo.png";
import logo2 from "../../img/logos/black.png";
import logo3 from "../../img/logos/consigo.png";
import logo4 from "../../img/logos/eventime.webp";
import logo5 from "../../img/logos/glitter.png";
import logo6 from "../../img/logos/Marriot.svg";
import logo7 from "../../img/logos/rock.png";
import logo8 from "../../img/logos/tribu.png";
import logo9 from "../../img/logos/polop.png";
import logo10 from "../../img/logos/babalu.png";
import logo11 from "../../img/logos/adlibitum.png";
import logo12 from "../../img/logos/Popladies.png";
import logo13 from "../../img/logos/rockbeat.png";
import logo14 from "../../img/logos/hive.png";

const logos = [
  logo1, logo10, logo12, logo13, logo5, logo2, logo7,
  logo8, logo9, logo6, logo11, logo3, logo4, logo14,
];

const logoLinks = [
  "https://www.dacapomusic.es/",
  "https://www.blacknoteclub.com/",
  "https://quetecosigo.com/",
  "https://www.rockandbeat.com/",
  "https://www.instagram.com/blackglittercoverband/",
  "https://www.marriott.com/en-us/hotels/vlcwi-the-westin-valencia/",
  "https://www.rockfm.fm/",
  "https://www.produccionestribu.com/",
  "https://escueladeartistas.es/",
  "https://www.instagram.com/babaluswingband/",
  "https://adlibitum.es/",
  "https://www.instagram.com/ladieselshow/",
  "https://eventime.es/",
  "https://hivestudio.es/",
];

const LogoCarousel = () => {
  const repeatedLogos = [...logos, ...logos, ...logos]; // duplicar 3 veces
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {repeatedLogos.map((logo, index) => (
          <div className="carousel-slide" key={index}>
            <a
              href={logoLinks[index % logos.length]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logo} alt={`logo-${index}`} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;

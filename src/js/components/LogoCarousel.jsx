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
import logo15 from "../../img/logos/fito.jpg";


const logos = [
  logo1, logo10, logo12, logo13,logo15, logo5, logo2, logo7,
  logo8, logo9, logo6, logo11, logo3, logo4, logo14,
];

const logoLinks = [
  "https://www.dacapomusic.es/",                            // logo1
  "http://www.babaluswingband.com/",             // logo10
  "https://www.instagram.com/tributopopladies/",                // logo12
  "https://www.rockandbeat.com/",                           // logo13
  "https://www.instagram.com/fitipaldisbandtributo_/",       // logo15
  "https://www.instagram.com/blackglittercoverband/",       // logo5
  "https://www.blacknoteclub.com/",                         // logo2
  "https://www.rockfm.fm/",                                 // logo7
  "https://espectaculoslatribu.com/",                     // logo8
  "https://escueladeartistasbysandrapolop.com/",                          // logo9
  "https://www.marriott.com/en-us/hotels/vlcwi-the-westin-valencia/", // logo6
  "https://adlibitum.es/",                                  // logo11
  "https://queteconsigo.com/",                               // logo3
  "https://eventime.es/",                                   // logo4
  "https://www.hiverecordingstudio.com/",                                 // logo14
];

const LogoCarousel = () => {
  const repeatedLogos = [...logos, ...logos,...logos]; // duplicar 3 veces
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

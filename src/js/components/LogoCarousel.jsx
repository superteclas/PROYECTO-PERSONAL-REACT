import React from "react";
import "../../styles/carousel.css";

import logo1 from "../../img/logos/capo.png";
import logo2 from "../../img/logos/black.png";
import logo3 from "../../img/logos/consigo.png";
import logo4 from "../../img/logos/eventime.webp";
import logo5 from "../../img/logos/glitter.webp";
import logo6 from "../../img/logos/Marriot.svg";
import logo7 from "../../img/logos/rock.png";
import logo8 from "../../img/logos/tribu.png";
import logo9 from "../../img/logos/polop.png";
import logo10 from "../../img/logos/babalu.webp";
import logo11 from "../../img/logos/adlibitum.png";
import logo12 from "../../img/logos/Popladies.png";
import logo13 from "../../img/logos/rockbeat.png";
import logo14 from "../../img/logos/hive.webp";
import logo15 from "../../img/logos/fito.webp";
import logo16 from "../../img/logos/wilfrid.webp";

const logos = [
  logo1,
  logo10,
  logo12,
  logo13,
  logo15,
  logo5,
  logo2,
  logo16,
  logo7,
  logo8,
  logo9,
  logo6,
  logo11,
  logo3,
  logo4,
  logo14,
];

const logoLinks = [
  "https://www.dacapomusic.es/",
  "http://www.babaluswingband.com/",
  "https://www.instagram.com/tributopopladies/",
  "https://www.rockandbeat.com/",
  "https://www.instagram.com/fitipaldisbandtributo_/",
  "https://www.instagram.com/blackglittercoverband/",
  "https://www.blacknoteclub.com/",
  "https://www.wilfridenergiahumana.com/",
  "https://www.rockfm.fm/",
  "https://espectaculoslatribu.com/",
  "https://escueladeartistasbysandrapolop.com/",
  "https://www.marriott.com/en-us/hotels/vlcwi-the-westin-valencia/",
  "https://adlibitum.es/",
  "https://queteconsigo.com/",
  "https://eventime.es/",
  "https://www.hiverecordingstudio.com/",
];

const LogoCarousel = () => {
  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {repeatedLogos.map((logo, index) => {
          const isVertical = logo === logo16;
          return (
            <div
              className={`carousel-slide ${isVertical ? "taller-slide" : ""}`}
              key={index}
            >
              <a
                href={logoLinks[index % logos.length]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className={isVertical ? "vertical-logo" : ""}
                />
              </a>
            </div>
          );
        })}
      </div>

      {/* Fallback SEO-friendly links for bots that don’t render JS */}
      <noscript>
        <div style={{ display: "none" }}>
          <ul>
            <li><a href="https://www.dacapomusic.es/" target="_blank" rel="noopener noreferrer">Dacapo Music</a></li>
            <li><a href="http://www.babaluswingband.com/" target="_blank" rel="noopener noreferrer">Babalu Swing</a></li>
            <li><a href="https://www.instagram.com/tributopopladies/" target="_blank" rel="noopener noreferrer">Pop Ladies</a></li>
            <li><a href="https://www.rockandbeat.com/" target="_blank" rel="noopener noreferrer">Rock & Beat</a></li>
            <li><a href="https://www.instagram.com/fitipaldisbandtributo_/" target="_blank" rel="noopener noreferrer">Fitipaldis Tributo</a></li>
            <li><a href="https://www.instagram.com/blackglittercoverband/" target="_blank" rel="noopener noreferrer">Black Glitter</a></li>
            <li><a href="https://www.blacknoteclub.com/" target="_blank" rel="noopener noreferrer">Black Note Club</a></li>
            <li><a href="https://www.wilfridenergiahumana.com/" target="_blank" rel="noopener noreferrer">Wilfrid Energía Humana</a></li>
            <li><a href="https://www.rockfm.fm/" target="_blank" rel="noopener noreferrer">Rock FM</a></li>
            <li><a href="https://espectaculoslatribu.com/" target="_blank" rel="noopener noreferrer">La Tribu</a></li>
            <li><a href="https://escueladeartistasbysandrapolop.com/" target="_blank" rel="noopener noreferrer">Sandra Polop Escuela</a></li>
            <li><a href="https://www.marriott.com/en-us/hotels/vlcwi-the-westin-valencia/" target="_blank" rel="noopener noreferrer">The Westin Valencia</a></li>
            <li><a href="https://adlibitum.es/" target="_blank" rel="noopener noreferrer">Ad Libitum</a></li>
            <li><a href="https://queteconsigo.com/" target="_blank" rel="noopener noreferrer">Qué te Consigo</a></li>
            <li><a href="https://eventime.es/" target="_blank" rel="noopener noreferrer">Eventime</a></li>
            <li><a href="https://www.hiverecordingstudio.com/" target="_blank" rel="noopener noreferrer">Hive Recording Studio</a></li>
          </ul>
        </div>
      </noscript>
    </div>
  );
};

export default LogoCarousel;

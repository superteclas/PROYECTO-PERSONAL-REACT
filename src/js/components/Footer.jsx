import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../img/logonormalsinfondo.webp";

export const Footer = () => {
  return (
    <footer className="footer" style={{ textAlign: "center", padding: "1rem 0" }}>
      {/* Logo */}
      <div style={{ marginBottom: "0.1rem" }}>
        <img
          src={logo}
          alt="Logo Álvaro Ponce"
          style={{ height: "70px", opacity: 0.85 }}
        />
      </div>

      {/* Texto autor sin enlace */}
      <p style={{ fontSize: "0.9rem", color: "#222" }}>
        Made by Álvaro Ponce © {new Date().getFullYear()}
      </p>

      {/* Redes sociales */}
      <div
        style={{
          marginTop: "0.5rem",
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          fontSize: "1.5rem",
        }}
      >
        <a
          href="https://github.com/superteclas"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="icon-social"
          style={{ color: "#444" }}
        >
          <FaGithub />
        </a>
        <a
          href="https://instagram.com/alvaroponcekeys"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="icon-social"
          style={{ color: "#eb6d2eff" }}
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com/superteclas"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="icon-social"
          style={{ color: "#cc0000" }}
        >
          <FaYoutube />
        </a>
      </div>

      {/* Aviso Legal */}
      <p style={{ marginTop: "1rem", fontSize: "0.8rem" }}>
        <Link
          to="/legal"
          style={{
            textDecoration: "underline",
            color: "#666",
          }}
        >
          Aviso Legal
        </Link>
      </p>

      {/* SEO fallback para bots sin JS */}
      <noscript>
        <div style={{ display: "none" }}>
          <ul>
            <li>
              <a
                href="https://github.com/superteclas"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/alvaroponcekeys"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/superteclas"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </noscript>
    </footer>
  );
};

import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../img/logonormalsinfondo.png";

export const Footer = () => {
  return (
    <footer className="footer" style={{ textAlign: "center", padding: "1rem 0" }}>
      <div style={{ marginBottom: "0.1rem" }}>
        <img
          src={logo}
          alt="Logo Álvaro Ponce"
          style={{ height: "70px", opacity: 0.85 }}
        />
      </div>

      <p>
        Made by{" "}
        <a
          href="https://www.youtube.com/superteclas"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#333", textDecoration: "none" }}
        >
          Álvaro Ponce
        </a>{" "}
        © {new Date().getFullYear()}
      </p>

      {/* Redes sociales con animación */}
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
          className="icon-social"
          style={{ color: "#000" }}
        >
          <FaGithub />
        </a>
        <a
          href="https://instagram.com/alvaroponcekeys"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-social"
          style={{ color: "#000" }}
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com/superteclas"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-social"
          style={{ color: "#000" }}
        >
          <FaYoutube />
        </a>
      </div>

      {/* Aviso Legal */}
      <p className="mt-2 text-xs text-gray-500">
        <Link to="/legal" style={{ textDecoration: "underline", color: "#777" }}>
          Aviso Legal
        </Link>
      </p>
    </footer>
  );
};

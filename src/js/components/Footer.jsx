import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../../img/logonormalsinfondo.png"; // Ajusta esta ruta

export const Footer = () => {
	return (
		<footer className="footer" style={{ textAlign: "center", padding: "1rem 0" }}>
			{/* LOGO ARRIBA */}
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
					Álvaro Ponce Marín
				</a>{" "}
				© {new Date().getFullYear()}
			</p>

			<div
				style={{
					marginTop: "0.5rem",
					display: "flex",
					justifyContent: "center",
					gap: "1rem",
					fontSize: "1.5rem",
					color: "#555",
				}}
			>
				<a
					href="https://github.com/superteclas"
					target="_blank"
					rel="noopener noreferrer"
					className="icon-social"
				>
					<FaGithub />
				</a>
				<a
					href="https://instagram.com/alvaroponcekeys"
					target="_blank"
					rel="noopener noreferrer"
					className="icon-social"
				>
					<FaInstagram />
				</a>
				<a
					href="https://www.youtube.com/superteclas"
					target="_blank"
					rel="noopener noreferrer"
					className="icon-social"
				>
					<FaYoutube />
				</a>
			</div>
		</footer>
	);
};

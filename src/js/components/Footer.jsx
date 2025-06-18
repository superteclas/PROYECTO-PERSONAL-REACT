import { FaHeart, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

export const Footer = () => {
	return (
		<footer className="footer">
			<p>
				Made  by{" "}
				<a
					href="https://www.youtube.com/superteclas"
					target="_blank"
					rel="noopener noreferrer"
					style={{ color: "#333", textDecoration: "underline" }}
				>
					Alvaro Ponce Marín
				</a>{" "}
				© {new Date().getFullYear()}
			</p>
			<div style={{ marginTop: "0.5rem", display: "flex", justifyContent: "center", gap: "1rem", fontSize: "1.25rem", color: "#555" }}>
				<a href="https://github.com/superteclas" target="_blank" rel="noopener noreferrer" style={{ color: "#555" }}>
					<FaGithub />
				</a>
				<a href="https://instagram.com/alvaroponcekeys" target="_blank" rel="noopener noreferrer" style={{ color: "#555" }}>
					<FaInstagram />
				</a>
				<a href="https://www.youtube.com/superteclas" target="_blank" rel="noopener noreferrer" style={{ color: "#555" }}>
					<FaYoutube />
				</a>
			</div>
		</footer>
	);
};

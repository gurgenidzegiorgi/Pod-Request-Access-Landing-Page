import { useState } from "react";
import "./App.css";

import logo from "../src/assets/desktop/logo.svg";
import spotifySVG from "../src/assets/desktop/spotify.svg";
import applePodSVG from "../src/assets/desktop/apple-podcast.svg";
import googlePodSVG from "../src/assets/desktop/google-podcasts.svg";
import pocketCastsSVG from "../src/assets/desktop/pocket-casts.svg";

const SVGlist = [
	{ src: spotifySVG, alt: "spotify icon" },
	{ src: applePodSVG, alt: "apple podcast icon" },
	{ src: googlePodSVG, alt: "google podcast icon" },
	{ src: pocketCastsSVG, alt: "pockest casts icon" },
];

function Form({ styles }) {
	const [email, setEmail] = useState("");
	const [showError, setShowError] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	const button = {
		border: "none",
		borderRadius: "2.8rem",
		boxShadow: "0px 25px 20px -20px rgba(84, 230, 175, 0.50)",
		padding: "1rem 2.7rem",
		color: "#121725",
		fontSize: "1.4rem",
		lineHeight: " 2.8rem",
		backgroundColor: isHovered ? "#B3FFE2" : "#54E6AF",
		transition: "all 0.3s ease",
	};

	const validateEmail = (email) => {
		// Regular expression pattern for email validation
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailPattern.test(email);
	};

	function handleSubmit(e) {
		if (email.trim() === " " || !validateEmail(email)) {
			e.preventDefault();
			setShowError(true);
		}
	}

	return (
		<form onSubmit={(e) => handleSubmit(e)} style={styles.form}>
			<input
				onChange={(e) => setEmail(e.target.value)}
				style={styles.input}
				type="text"
				placeholder="Email address"
			/>
			{showError && <p style={styles.error}>Oops! Please check your email</p>}
			<button
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				style={button}
			>
				Request Access
			</button>
		</form>
	);
}

function ContentDiv({ styles }) {
	return (
		<div style={styles.contentDiv}>
			<h1 style={styles.title}>
				<span style={{ ...styles.title, color: "#54E6AF" }}>
					Publish your podcasts
				</span>{" "}
				everywhere.
			</h1>
			<p style={styles.textContent}>
				Upload your audio to Pod with a single click. We’ll then distribute your
				podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and
				more!
			</p>
			<div style={styles.SVGdiv}>
				{SVGlist.map((icon) => {
					return <img key={icon.alt} src={icon.src} alt={icon.alt} />;
				})}
			</div>
			<Form styles={styles} />
		</div>
	);
}

export default function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div style={styles.overlay}></div>
			<main className="App">
				<img style={{ margin: "0 0 6.7rem 35%" }} src={logo} alt="logo" />
				<ContentDiv styles={styles} />
			</main>
		</>
	);
}

const styles = {
	overlay: {
		position: "fixed",
		top: "0",
		left: "0",
		width: "100%",
		height: "100%",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		zIndex: "-1",
	},
	contentDiv: {
		textAlign: "center",
	},
	SVGdiv: {
		display: "flex",
		justifyContent: "space-between",
		gap: "1rem",
	},
	title: {
		color: "#fff",
		fontSize: "2.6rem",
		lineHeight: "3.8rem",
		textTransform: "uppercase",
	},
	textContent: {
		color: "#C2CBE5",
		fontSize: "1.5rem",
		lineHeight: "2.5rem",
		margin: "1.6rem 0 3.6rem 0",
	},
	form: {
		display: "flex",
		flexDirection: "column",
		gap: "1.6rem",
		marginTop: "5.1rem",
	},
	input: {
		borderRadius: "2.8rem",
		background: "#2C344B",
		color: "#fff",
		border: "none",
		padding: "1.4rem 0 1.4rem 3.2rem",
		fontSize: "1.4rem",
		lineHeight: " 2.8rem",
		outline: "none",
	},
	error: {
		color: "#FB3E3E",
		fontSize: "1.2rem",
	},
};

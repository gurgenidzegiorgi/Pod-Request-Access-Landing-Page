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

function Form() {
	const [email, setEmail] = useState("");
	const [showError, setShowError] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	const hovered = {
		...selectedStyles.button,
		backgroundColor: isHovered ? "#B3FFE2" : "#54E6AF",
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
		<form onSubmit={(e) => handleSubmit(e)} style={selectedStyles.form}>
			<input
				onChange={(e) => setEmail(e.target.value)}
				style={selectedStyles.input}
				type="text"
				placeholder="Email address"
			/>
			{showError && (
				<p style={selectedStyles.error}>Oops! Please check your email</p>
			)}
			<button
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				style={hovered}
			>
				Request Access
			</button>
		</form>
	);
}

function ContentDiv() {
	return (
		<div style={selectedStyles.contentDiv}>
			<h1 style={selectedStyles.title}>
				<span style={{ ...selectedStyles.title, color: "#54E6AF" }}>
					Publish your podcasts
				</span>{" "}
				everywhere.
			</h1>
			<p style={selectedStyles.textContent}>
				Upload your audio to Pod with a single click. We’ll then distribute your
				podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and
				more!
			</p>
			<div style={selectedStyles.SVGdiv}>
				{SVGlist.map((icon) => {
					return <img key={icon.alt} src={icon.src} alt={icon.alt} />;
				})}
			</div>
			<Form styles={selectedStyles} />
		</div>
	);
}

const styles = {
	App: {
		height: "100svh",
		position: "relative",
		padding: "6.2rem 2.4rem 9.4rem 2.4rem",
	},
	overlay: {
		position: "fixed",
		top: "0",
		left: "0",
		width: "100%",
		height: "100%",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		zIndex: "-1",
	},
	logo: {
		margin: "0px 0px 6.7rem 35%",
	},
	contentDiv: {
		textAlign: "center",
		display: "flex",
		flexDirection: "column",
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
		overflowY: "hidden",
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
	button: {
		border: "none",
		borderRadius: "2.8rem",
		boxShadow: "0px 25px 20px -20px rgba(84, 230, 175, 0.50)",
		padding: "1rem 2.7rem",
		color: "#121725",
		fontSize: "1.4rem",
		lineHeight: " 2.8rem",

		transition: "all 0.3s ease",
	},
	error: {
		color: "#FB3E3E",
		fontSize: "1.2rem",
	},
};

const tabletStyles = {
	...styles,
	App: {
		...styles.App,
		padding: "0 9.4rem 0 3.9rem",
		backgroundColor: "#121725",
		backgroundImage:
			'url("../src/assets/tablet/image-host.jpg"), url("../src/assets/desktop/bg-pattern-dots.svg")',
		backgroundRepeat: "no-repeat",
		backgroundPosition: "top right, bottom left",
	},
	logo: {
		margin: "5rem 0 0 0 ",
	},
	contentDiv: {
		...styles.contentDiv,
		textAlign: "unset",
		backgroundColor: "#121725",
		padding: "9.3rem 2rem 2rem 0",
		margin: "10rem 0",
	},
	title: {
		...styles.title,
		fontSize: "4.8rem",
		lineHeight: "5.6rem",
	},
	textContent: {
		...styles.textContent,
		fontSize: "1.8rem",
		lineHeight: "2.8rem",
		margin: "1.6rem 19rem 4rem 0",
	},
	form: {
		...styles.form,
		margin: "0 20rem 6.4rem 0",
		position: "relative",
	},
	SVGdiv: {
		...styles.SVGdiv,
		order: "1",
		marginRight: "10rem",
	},
	error: {
		...styles.error,
		marginLeft: "3.2rem",
	},
	button: {
		...styles.button,
		position: "absolute",
		top: "4px",
		right: "0.5rem",
	},
};

const desktopStyles = {
	...tabletStyles,
	App: {
		...styles.App,
		padding: "10.2rem 9.4rem 0 3.9rem",
		backgroundColor: "#121725",
		backgroundImage:
			'url("../src/assets/desktop/image-host.jpg"), url("../src/assets/desktop/bg-pattern-dots.svg")',
		backgroundRepeat: "no-repeat",
		backgroundPosition: "top 13rem right, bottom 7.5rem right",
	},
	logo: {
		...tabletStyles.logo,
		margin: "unset",
	},
	contentDiv: {
		...tabletStyles.contentDiv,
		padding: "8.8rem 5.8rem 2rem 0",
		margin: "10rem 0 0 0",
		width: "90rem",
	},
	title: {
		...tabletStyles.title,
		fontSize: "5.2rem",
		lineHeight: "6.2rem",
	},
};

const screenWidth = window.innerWidth;

const selectedStyles =
	screenWidth >= 1440
		? desktopStyles
		: screenWidth >= 768
		? tabletStyles
		: styles;

export default function App() {
	return (
		<>
			<div style={selectedStyles.overlay}></div>
			<main style={selectedStyles.App}>
				<img style={selectedStyles.logo} src={logo} alt="logo" />
				<ContentDiv styles={selectedStyles} />
			</main>
		</>
	);
}

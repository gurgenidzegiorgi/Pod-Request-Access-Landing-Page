/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Form({ selectedStyles }) {
	// const { selectedStyles } = props;
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

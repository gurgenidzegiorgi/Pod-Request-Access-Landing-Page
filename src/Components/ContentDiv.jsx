/* eslint-disable react/prop-types */

import Form from "./Form";
import spotifySVG from "../../src/assets/desktop/spotify.svg";
import applePodSVG from "../../src/assets/desktop/apple-podcast.svg";
import googlePodSVG from "../../src/assets/desktop/google-podcasts.svg";
import pocketCastsSVG from "../../src/assets/desktop/pocket-casts.svg";

const SVGlist = [
	{ src: spotifySVG, alt: "spotify icon" },
	{ src: applePodSVG, alt: "apple podcast icon" },
	{ src: googlePodSVG, alt: "google podcast icon" },
	{ src: pocketCastsSVG, alt: "pockest casts icon" },
];

export default function ContentDiv({ selectedStyles }) {
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
			<Form selectedStyles={selectedStyles} />
		</div>
	);
}

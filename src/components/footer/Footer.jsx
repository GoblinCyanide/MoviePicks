import React from "react";
import {
	FaFacebookF,
	FaInstagram,
	FaTwitter,
	FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
	return (
		<footer className="footer">
			<ContentWrapper>
				<ul className="menuItems">
					<li className="menuItem">Terms Of Use</li>
					<li className="menuItem">Privacy-Policy</li>
					<li className="menuItem">About</li>
					<li className="menuItem">Blog</li>
					<li className="menuItem">FAQ</li>
				</ul>
				<div className="infoText">
					This project was made by Siddhant Kumar for learning purposes.
					This product uses the TMDB API but is not endorsed or certified by TMDB.
					Data and images provided by TMDB (The Movie Database) - <a href="https://www.themoviedb.org/">Link</a>
					<br />Thanks for visiting this website.
				</div>
				<div className="socialIcons">
					<a href="https://www.facebook.com/siddhant.kumar.5473894/">
						<span className="icon">
							<FaFacebookF />
						</span>
					</a>
					<a href="https://instagram.com/siddhant.kumar.8055">
						<span className="icon">
							<FaInstagram />
						</span>
					</a>
					<a href="https://www.twitter.com">
						<span className="icon">
							<FaTwitter />
						</span>
					</a>
					<a href="https://www.linkedin.com/in/siddhant-kumar-b74962237/">
						<span className="icon">
							<FaLinkedin />
						</span>
					</a>
				</div>
			</ContentWrapper>
		</footer>
	);
};

export default Footer;
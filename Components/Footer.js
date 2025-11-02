// Footer.js 
import React from 'react'; 
import { FontAwesomeIcon } 
	from '@fortawesome/react-fontawesome'; 
import { faLinkedin, faGithub, faTwitter } 
	from '@fortawesome/free-brands-svg-icons'; 
import './style.css'; // Import your custom CSS file 

const Footer = () => { 
return ( 
	<footer className="footer"> 
	<div className="container"> 
		<div className="row"> 
		<div className="col-md-6"> 
			<p>© 2025 created by Onkar Masal</p> 
		</div> 
		<div className="col-md-6 text-md-right"> 
			<ul className="social-icons list-unstyled"> 
			<li> 
				<a 
href="https://www.linkedin.com/in/𝐎𝐧𝐤𝐚𝐫-𝐌𝐚𝐬𝐚𝐥-a58614294" target="_blank" rel="noopener noreferrer"> 
				<FontAwesomeIcon icon={faLinkedin} /> 
				</a> 
			</li> 
			</ul> 
		</div> 
		</div> 
	</div> 
	</footer> 
); 
}; 

export default Footer;
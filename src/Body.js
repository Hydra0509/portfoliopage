import React from 'react'
import Footer from './Footer'
import AboutMe from './Aboutme'
import { Fade, Zoom } from "react-awesome-reveal";

export default function Bodypart() {


	return (

				<div>
					<div>
						<AboutMe />
					<Fade>
						<AboutMe />
					</Fade>
					<Zoom>
						<AboutMe />
					</Zoom>
								<br></br>
								<h1 className="contactme">CONTACT ME</h1>
								<div className="paddingbetween2"></div>
								<div className="section1"></div>
								<div className="section2"></div>
								<div className="section3"></div>
						<Footer />
					</div>
				</div>
				)
}
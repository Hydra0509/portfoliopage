import React from 'react'
import Footer from './Footer'
import AboutMe from './Aboutme'
import { Fade, Zoom } from "react-awesome-reveal";
import section3pic from "./images/previewpic4.png"
import section2pic from './images/previewpic3.png'
import section4pic from './images/pictureskull.jpg'
export default function Bodypart() {


	return (

				<div>
					<div>
						<AboutMe />
						<AboutMe />
						<AboutMe />
						<AboutMe />
								<br></br>
								<h1 className="contactme">CONTACT ME</h1>
								<div className="paddingbetween2"></div>
								<div className="section1"></div>
								<img className="section2" src={section2pic}></img>
								<img className="section3" src={section3pic}></img>
								<img className="section4" src={section4pic}></img>
						<Footer />
					</div>
				</div>
				)
}
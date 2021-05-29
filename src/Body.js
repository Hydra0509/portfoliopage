import React from 'react'
import Footer from './Footer'
import AboutMe from './Aboutme'
import { Fade, Zoom } from "react-awesome-reveal";
import section1pic from "./images/previewpic1.png"
import section2pic from "./images/previewpic2.png"
import section3pic from "./images/previewpic3.png"
import section4pic from "./images/previewpic4.png"
import section5pic from "./images/previewpic5.png"
import section6pic from "./images/previewpic6.png"
import section7pic from "./images/previewpic7.png"
import section8pic from "./images/previewpic8.png"
import section9pic from "./images/previewpic9.png"
import section10pic from "./images/previewpic10.png"
import section11pic from "./images/previewpic11.png"

export default function Bodypart() {

	return (
				<div>
				<div className="bodyimages">
						<img className="section" src={section3pic}></img>
						<img className="section" src={section11pic}></img>
						<img className="section" src={section1pic}></img>
						<img className="section" src={section4pic}></img>
				</div>
				<div className="bodyimages2">
						<img className="section" src={section5pic}></img>
						<img className="section" src={section6pic}></img>
						<img className="section" src={section7pic}></img>
						<img className="section" src={section8pic}></img>
				</div>
				<div className="bodyimages3">
						<img className="section" src={section9pic}></img>
						<img className="section" src={section10pic}></img>
						<img className="section" src={section2pic}></img>
				</div>
				</div>
		)
}
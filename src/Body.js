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
		<div  className="bodyimages">
						<div className="picturediv">
								<img className="section" src={section3pic}></img>
								<div className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
					</div>
					<div className="picturediv">
								<img className="section" src={section11pic}></img>
								<div className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
					</div>
					<div className="picturediv">
								<img className="section" src={section1pic}></img>
								<div className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
					</div>
					<div className="picturediv">
								<img className="section" src={section4pic}></img>
								<div className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
					</div>
					<div className="picturediv">
								<img className="section" src={section5pic}></img>
								<div className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
					</div>
					<div className="picturediv">
								<img className="section" src={section6pic}></img>
								<div className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
					</div>
					<div className="picturediv">
								<img className="section" src={section7pic}></img>
								<div className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
					</div>
					<div className="picturediv">
								<img className="section" src={section8pic}></img>
								<div className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
					</div>
					<div className="picturediv">
								<img className="section" src={section9pic}></img>
								<div className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
					</div>
					<div className="picturediv">
								<img className="section" src={section10pic}></img>
								<div className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
					</div>
					<div className="picturediv">
								<img className="section" src={section2pic}></img>
								<div className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
					</div>
					<div className="picturediv">
								<img className="section" src={section8pic}></img>
								<div className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
					</div>
		</div>
		)
}
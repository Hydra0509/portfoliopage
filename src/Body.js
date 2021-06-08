import React,{useState} from 'react'
import ImageSwiper from './swiper.js'
import Footer from './Footer'
import AboutMe from './Aboutme'
import Modal from 'react-modal';
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


Modal.setAppElement('#root')
export default function Bodypart() {
const [modalIsOpen,setModalIsOpen] = useState(false)

const modalStyles = {
	  content : {
	top: '-20px',
    width: '40%',
    height: '100vh',
    marginRight:'-2.2%',
    overflow: 'scroll',
    textAlign: 'center',
    display:'flex',
    justifyContent:'center',
    flexWrap: 'wrap'
  },
  		overlay : {
  	position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    overflow: 'hidden',
    position:'fixed' 	}
}

	return (
		<div>
		<Modal closeTimeoutMS={400} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}  style={modalStyles}>
		<h2>THIS IS THE TITLE</h2>
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
		<div><img className="section" src={section3pic}></img></div>
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
		<img className="section" src={section3pic}></img>
		<img className="section" src={section3pic}></img>
		</Modal>
		<div  className="bodyimages">
					<div className="picturediv">
								<img onClick={() => setModalIsOpen(true)} className="section" src={section3pic}></img>
								<div onClick={() => setModalIsOpen(true)} className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
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
		</div>
		)
}
import React,{useState,useEffect} from 'react'
import ReactImageAppear from 'react-image-appear';
import loading from './images/loading.gif'
import {ImageSwiper2,ImageSwiper3,ImageSwiper4,ImageSwiper5,ImageSwiper6,ImageSwiper7,ImageSwiper8,ImageSwiper9,ImageSwiper10,ImageSwiper11,ImageSwiper12 } from './swiper.js'
import ImageSwiper from './swiper.js'
import Aboutme from './Aboutme'
import Modal from 'react-modal';
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
import kntur from './images/KNTUR.png'





Modal.setAppElement('#root')
export default function Bodypart() {
const [modalIsOpen1,setModalIsOpen1] = useState(false)
const [modalIsOpen2,setModalIsOpen2] = useState(false)
const [modalIsOpen3,setModalIsOpen3] = useState(false)
const [modalIsOpen4,setModalIsOpen4] = useState(false)
const [modalIsOpen5,setModalIsOpen5] = useState(false)
const [modalIsOpen6,setModalIsOpen6] = useState(false)
const [modalIsOpen7,setModalIsOpen7] = useState(false)
const [modalIsOpen8,setModalIsOpen8] = useState(false)
const [modalIsOpen9,setModalIsOpen9] = useState(false)
const [modalIsOpen10,setModalIsOpen10] = useState(false)
const [modalIsOpen11,setModalIsOpen11] = useState(false)
const [modalIsOpen12,setModalIsOpen12] = useState(false)

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
    flexWrap: 'wrap',
    zIndex:'0'
  },
  		overlay : {
  	backgroundColor: 'rgba(50, 50, 50, 0.70)',
  	position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    overflow: 'hidden',
    position:'fixed',
    zIndex:'0' 	}
}

const swiperModalStyles = {
	  content : {
	  	top: '130px',
    width: '1000px',
    height: '600px',
    display:'flex',
    justifyContent:'center',
    alignContent:'center',
    flexWrap: 'wrap',
    zIndex:'1'
  },
  		overlay : {
  	display:'flex',
    flexWrap: 'wrap',
  	backgroundColor: 'rgba(50, 50, 50, 0.70)',
  	position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    overflow: 'hidden',
    position:'fixed',
    zIndex:'1' 	}
}
const [swiperModalIsOpen1,setSwiperModalIsOpen1] = useState(false)
const [swiperModalIsOpen2,setSwiperModalIsOpen2] = useState(false)
const [swiperModalIsOpen3,setSwiperModalIsOpen3] = useState(false)
const [swiperModalIsOpen4,setSwiperModalIsOpen4] = useState(false)
const [swiperModalIsOpen5,setSwiperModalIsOpen5] = useState(false)
const [swiperModalIsOpen6,setSwiperModalIsOpen6] = useState(false)
const [swiperModalIsOpen7,setSwiperModalIsOpen7] = useState(false)
const [swiperModalIsOpen8,setSwiperModalIsOpen8] = useState(false)
const [swiperModalIsOpen9,setSwiperModalIsOpen9] = useState(false)
const [swiperModalIsOpen10,setSwiperModalIsOpen10] = useState(false)
const [swiperModalIsOpen11,setSwiperModalIsOpen11] = useState(false)
const [swiperModalIsOpen12,setSwiperModalIsOpen12] = useState(false)

function toggleActivate1() {
	setSwiperModalIsOpen1(true)
}

function toggleActivate2() {
	setSwiperModalIsOpen2(true)
}

function toggleActivate3() {
	setSwiperModalIsOpen3(true)
}

function toggleActivate4() {
	setSwiperModalIsOpen4(true)
}

function toggleActivate5() {
	setSwiperModalIsOpen5(true)
}

function toggleActivate6() {
	setSwiperModalIsOpen6(true)
}

function toggleActivate7() {
	setSwiperModalIsOpen7(true)
}

function toggleActivate8() {
	setSwiperModalIsOpen8(true)
}

function toggleActivate9() {
	setSwiperModalIsOpen9(true)
}

function toggleActivate10() {
	setSwiperModalIsOpen10(true)
}

function toggleActivate11() {
	setSwiperModalIsOpen11(true)
}

function toggleActivate12() {
	setSwiperModalIsOpen12(true)
}

const [preloader,setPreloader] = useState(true)

useEffect(() => {
	setTimeout(() => setPreloader(false),3000)
	return function clearPreloader() {
	}
},[])

	return (
		<>
		{preloader === false ? (
		<div className="afterpreload">
		<Aboutme/>
		<Modal closeTimeoutMS={500} isOpen={swiperModalIsOpen1} onRequestClose={() => setSwiperModalIsOpen1(false)} style={swiperModalStyles}>
		<div style={{display:'flex', flexWrap:'wrap'}}><ImageSwiper /></div>
		</Modal>

		<Modal closeTimeoutMS={500} isOpen={swiperModalIsOpen2} onRequestClose={() => setSwiperModalIsOpen2(false)} style={swiperModalStyles}>
		<div><ImageSwiper2 /></div>
		</Modal>

		<Modal closeTimeoutMS={500} isOpen={swiperModalIsOpen3} onRequestClose={() => setSwiperModalIsOpen3(false)} style={swiperModalStyles}>
		<div><ImageSwiper3 /></div>
		</Modal>

		<Modal closeTimeoutMS={500} isOpen={swiperModalIsOpen4} onRequestClose={() => setSwiperModalIsOpen4(false)} style={swiperModalStyles}>
		<div><ImageSwiper4 /></div>
		</Modal>

		<Modal closeTimeoutMS={500} isOpen={swiperModalIsOpen5} onRequestClose={() => setSwiperModalIsOpen5(false)} style={swiperModalStyles}>
		<div><ImageSwiper5 /></div>
		</Modal>

		<Modal closeTimeoutMS={500} isOpen={swiperModalIsOpen6} onRequestClose={() => setSwiperModalIsOpen6(false)} style={swiperModalStyles}>
		<div><ImageSwiper6 /></div>
		</Modal>

		<Modal closeTimeoutMS={500} isOpen={swiperModalIsOpen7} onRequestClose={() => setSwiperModalIsOpen7(false)} style={swiperModalStyles}>
		<div><ImageSwiper7 /></div>
		</Modal>

		<Modal closeTimeoutMS={500} isOpen={swiperModalIsOpen8} onRequestClose={() => setSwiperModalIsOpen8(false)} style={swiperModalStyles}>
		<div><ImageSwiper8 /></div>
		</Modal>

		<Modal closeTimeoutMS={500} isOpen={swiperModalIsOpen9} onRequestClose={() => setSwiperModalIsOpen9(false)} style={swiperModalStyles}>
		<div><ImageSwiper9 /></div>
		</Modal>

		<Modal closeTimeoutMS={500} isOpen={swiperModalIsOpen10} onRequestClose={() => setSwiperModalIsOpen10(false)} style={swiperModalStyles}>
		<div><ImageSwiper10 /></div>
		</Modal>

		<Modal closeTimeoutMS={500} isOpen={swiperModalIsOpen11} onRequestClose={() => setSwiperModalIsOpen11(false)} style={swiperModalStyles}>
		<div><ImageSwiper11 /></div>
		</Modal>

		<Modal closeTimeoutMS={500} isOpen={swiperModalIsOpen12} onRequestClose={() => setSwiperModalIsOpen12(false)} style={swiperModalStyles}>
		<div><ImageSwiper12 /></div>
		</Modal>

		<Modal closeTimeoutMS={500} isOpen={modalIsOpen1} onRequestClose={() => setModalIsOpen1(false)}  style={modalStyles}>
		<h2>THIS IS THE TITLE</h2>
		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		<div><img onClick= {() => toggleActivate1() }  style={{ cursor:'zoom-in' , display:'flex',flexWrap:'wrap' }} src={section3pic}></img></div>
		</Modal>

		<Modal closeTimeoutMS={500} isOpen={modalIsOpen2} onRequestClose={() => setModalIsOpen2(false)}  style={modalStyles}>
		<h2>THIS IS THE SECOND TITLE</h2>
		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		<div><img  onClick= {() => toggleActivate2() } style={{ cursor:'zoom-in', display:'flex',flexWrap:'wrap'  }}  src={section3pic}></img></div>
		</Modal>

		<Modal closeTimeoutMS={500} isOpen={modalIsOpen3} onRequestClose={() => setModalIsOpen3(false)}  style={modalStyles}>
		<h2>THIS IS THE 3 TITLE</h2>
		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		<div><img  onClick= {() => toggleActivate3()} style={{ cursor:'zoom-in', display:'flex',flexWrap:'wrap'  }} src={section3pic}></img></div>
		</Modal>

		<Modal closeTimeoutMS={500} isOpen={modalIsOpen4} onRequestClose={() => setModalIsOpen4(false)}  style={modalStyles}>
		<h2>THIS IS THE 4 TITLE</h2>
		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		<div><img  onClick= {() => toggleActivate4()} style={{ cursor:'zoom-in', display:'flex',flexWrap:'wrap'  }} src={section3pic}></img></div>
		</Modal>

		<Modal closeTimeoutMS={500} isOpen={modalIsOpen5} onRequestClose={() => setModalIsOpen5(false)}  style={modalStyles}>
		<h2>THIS IS THE 5 TITLE</h2>
		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		<div><img  onClick= {() => toggleActivate5()} style={{ cursor:'zoom-in', display:'flex',flexWrap:'wrap'  }} src={section3pic}></img></div>
		</Modal>

		<Modal closeTimeoutMS={500} isOpen={modalIsOpen6} onRequestClose={() => setModalIsOpen6(false)}  style={modalStyles}>
		<h2>THIS IS THE 6 TITLE</h2>
		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		<div><img  onClick= {() => toggleActivate6()} style={{ cursor:'zoom-in', display:'flex',flexWrap:'wrap'  }} src={section3pic}></img></div>
		</Modal>

		<Modal closeTimeoutMS={500} isOpen={modalIsOpen7} onRequestClose={() => setModalIsOpen7(false)}  style={modalStyles}>
		<h2>THIS IS THE 7 TITLE</h2>
		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		<div><img  onClick= {() => toggleActivate7()} style={{ cursor:'zoom-in', display:'flex',flexWrap:'wrap'  }} src={section3pic}></img></div>
		</Modal>

		<Modal closeTimeoutMS={500} isOpen={modalIsOpen8} onRequestClose={() => setModalIsOpen8(false)}  style={modalStyles}>
		<h2>THIS IS THE 8 TITLE</h2>
		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		<div><img  onClick= {() => toggleActivate8()} style={{ cursor:'zoom-in', display:'flex',flexWrap:'wrap'  }} src={section3pic}></img></div>
		</Modal>

		<Modal closeTimeoutMS={500} isOpen={modalIsOpen9} onRequestClose={() => setModalIsOpen9(false)}  style={modalStyles}>
		<h2>THIS IS THE 9 TITLE</h2>
		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		<div><img  onClick= {() => toggleActivate9()} style={{ cursor:'zoom-in', display:'flex',flexWrap:'wrap'  }} src={section3pic}></img></div>
		</Modal>

		<Modal closeTimeoutMS={500} isOpen={modalIsOpen10} onRequestClose={() => setModalIsOpen10(false)}  style={modalStyles}>
		<h2>THIS IS THE 10 TITLE</h2>
		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		<div><img  onClick= {() => toggleActivate10()} style={{ cursor:'zoom-in', display:'flex',flexWrap:'wrap' }} src={section3pic}></img></div>
		</Modal>

		<Modal closeTimeoutMS={500} isOpen={modalIsOpen11} onRequestClose={() => setModalIsOpen11(false)}  style={modalStyles}>
		<h2>THIS IS THE 11 TITLE</h2>
		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		<div><img  onClick= {() => toggleActivate11()} style={{ cursor:'zoom-in', display:'flex',flexWrap:'wrap'  }} src={section3pic}></img></div>
		</Modal>

		<Modal closeTimeoutMS={500} isOpen={modalIsOpen12} onRequestClose={() => setModalIsOpen12(false)}  style={modalStyles}>
		<h2>THIS IS THE 12 TITLE</h2>
		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		<div><img onClick= {() => toggleActivate12()} style={{ cursor:'zoom-in', display:'flex',flexWrap:'wrap'  }} src={section3pic}></img></div>
		</Modal>
		<div  className="bodyimages">
					<div className="picturediv">
								<ReactImageAppear loader={loading} onClick={() => setModalIsOpen1(true)} className="section" src={section3pic} animationDuration="1s"></ReactImageAppear>
								<div onClick={() => setModalIsOpen1(true)} className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
					</div>
					<div className="picturediv">
								<ReactImageAppear loader={loading} onClick={() => setModalIsOpen2(true)} className="section" src={section11pic} animationDuration="1s"></ReactImageAppear>
								<div onClick={() => setModalIsOpen2(true)} className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
					</div>
					<div className="picturediv">
								<ReactImageAppear loader={loading} onClick={() => setModalIsOpen3(true)} className="section" src={section1pic} animationDuration="1s"></ReactImageAppear>
								<div onClick={() => setModalIsOpen3(true)} className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
					</div>
					<div className="picturediv">
								<ReactImageAppear loader={loading} onClick={() => setModalIsOpen4(true)} className="section" src={section4pic} animationDuration="1s"></ReactImageAppear>
								<div onClick={() => setModalIsOpen4(true)} className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
					</div>
					<div className="picturediv">
								<ReactImageAppear loader={loading} onClick={() => setModalIsOpen5(true)} className="section" src={section5pic} animationDuration="1s"></ReactImageAppear>
								<div onClick={() => setModalIsOpen5(true)} className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
					</div>
					<div className="picturediv">
								<ReactImageAppear loader={loading} onClick={() => setModalIsOpen6(true)} className="section" src={section6pic} animationDuration="1s"></ReactImageAppear>
								<div onClick={() => setModalIsOpen6(true)} className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
					</div>
					<div className="picturediv">
								<ReactImageAppear loader={loading} onClick={() => setModalIsOpen7(true)} className="section" src={section7pic} animationDuration="1s"></ReactImageAppear>
								<div onClick={() => setModalIsOpen7(true)} className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
					</div>
					<div className="picturediv">
								<ReactImageAppear loader={loading} onClick={() => setModalIsOpen8(true)} className="section" src={section8pic} animationDuration="1s"></ReactImageAppear>
								<div onClick={() => setModalIsOpen8(true)} className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
					</div>
					<div className="picturediv">
								<ReactImageAppear loader={loading} onClick={() => setModalIsOpen9(true)} className="section" src={section9pic} animationDuration="1s"></ReactImageAppear>
								<div onClick={() => setModalIsOpen9(true)} className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
					</div>
					<div className="picturediv">
								<ReactImageAppear loader={loading} onClick={() => setModalIsOpen10(true)} className="section" src={section10pic} animationDuration="1s"></ReactImageAppear>
								<div onClick={() => setModalIsOpen10(true)} className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
					</div>
					<div className="picturediv">
								<ReactImageAppear loader={loading} onClick={() => setModalIsOpen11(true)} className="section" src={section2pic} animationDuration="1s"></ReactImageAppear>
								<div onClick={() => setModalIsOpen11(true)} className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
					</div>
					<div className="picturediv">
								<ReactImageAppear loader={loading} onClick={() => setModalIsOpen12(true)} className="section" src={section2pic} animationDuration="1s"></ReactImageAppear>
								<div onClick={() => setModalIsOpen12(true)} className="section" className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
					</div>
		</div>
		</div>) : (
			<div>
				<img src={kntur} className="preloader" />
			</div>
		)}
		</>
		)
}
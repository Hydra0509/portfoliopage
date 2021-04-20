import React, { useState,useEffect } from 'react'
import ImageSlider from './ImageSlider'
import SliderData from './SliderData'
import Skull from './images/pictureskull.jpg'
import Aos from 'aos'
import "aos/dist/aos.css"
import SliderOne from './SliderOne'
import {RiArrowUpSLine} from 'react-icons/ri'


export default function Bodypart() {
const [offsetY, setOffsetY] = useState(0);
const handleScroll = () => setOffsetY(window.pageYOffset);
useEffect(() => {
  window.addEventListener('scroll', handleScroll);

  return () =>  window.removeEventListener('scroll', handleScroll)
},[]);

useEffect(() => {
	Aos.init({duration: 3200, once:true});
}, []);


const [divstyle,setDivStyle] = useState({
	height: '700px',
	transition: 'ease 2s',
	zIndex:'1'
});

const [arrowstyle,setArrowStyle] = useState({
	opacity: '0',
	transitionDelay: '1s',
	transitionDuration: '2.5s'
})

const [divtext,setDivText] = useState({
	opacity: '0',
	transitionDelay: '1s',
	transitionDuration: '2.5s'
})


function toggleActivate()  {
	setDivStyle({...divstyle, height:'1100px',backgroundColor:'black'})
	setArrowStyle({...arrowstyle, opacity: '1' , transitionDelay: '1.5s'})
	setDivText({...divtext, opacity:'1', transitionDelay: '0.7s'})
}

function toggleDeactivate() {
	setDivStyle({...divstyle, height:'700px',backgroundColor:''})
	setArrowStyle({...arrowstyle, opacity: '0', transitionDelay: '0s', transitionDuration: '0.2s'})
	setDivText({...divtext, opacity:'0', transitionDelay: '0s',transitionDuration: '0.8s'})
}



	return (
		<div className="bodyContainer" style={{ 
		 	transform: `translateY(-${ offsetY * 0.0 }px)` , zIndex:''}}>
		<div style= {{transform: `translateY(${ offsetY * 0.4 }px)`}}>
		<h1 className="aboutme">ABOUT ME</h1>
		<div className="paddingbetween"></div>
		<RiArrowUpSLine style={arrowstyle} className="divarrow" onClick={() => toggleDeactivate()} />
		<div style={divstyle} className="bodycontentone">
		<h1 className="divtitle">Cím/valami szöveg</h1>
		<SliderOne slides={SliderData} />
		<button className="readmorebutton" onClick={() => toggleActivate()}>Read more</button>
		<h2 className="divtext" style={divtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at sem consectetur, bibendum massa sodales, luctus turpis. Donec molestie eros bibendum tortor imperdiet imperdiet. Morbi non tincidunt mi. Cras at feugiat risus. Nam non metus dignissim, elementum purus dictum, vulputate dolor. Duis massa sapien, congue a semper at, luctus non augue. Mauris tincidunt ante vitae justo suscipit, quis commodo nunc accumsan. Cras vitae congue massa. Fusce vel interdum neque. Suspendisse potenti. Morbi id auctor erat. Vivamus hendrerit sit amet lorem ut convallis.

In at libero elit. Ut posuere nunc vel suscipit egestas. </h2>
		</div>
		<div className="paddingbetween"></div>
		<div className="bodycontenttwo">
		<h2>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at sem consectetur, bibendum massa sodales, luctus turpis. Donec molestie eros bibendum tortor imperdiet imperdiet. Morbi non tincidunt mi. Cras at feugiat risus. Nam non metus dignissim, elementum purus dictum, vulputate dolor. Duis massa sapien, congue a semper at, luctus non augue. Mauris tincidunt ante vitae justo suscipit, quis commodo nunc accumsan. Cras vitae congue massa. Fusce vel interdum neque. Suspendisse potenti. Morbi id auctor erat. Vivamus hendrerit sit amet lorem ut convallis.

In at libero elit. Ut posuere nunc vel suscipit egestas. 
		<img className="skullimage" src={Skull} alt="skull" width="800px" height="500px"/>
		</h2>
		<div className="paddingbetween"></div>
				<h1 className="mywork">MY WORK</h1>
				<ImageSlider slides={SliderData} />
		</div>
		</div>
		</div>
				)
}
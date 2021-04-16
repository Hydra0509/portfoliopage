import React, { useState,useEffect } from 'react'
import ImageSlider from './ImageSlider'
import SliderData from './SliderData'
import Skull from './images/pictureskull.jpg'
import Aos from 'aos'
import "aos/dist/aos.css"


export default function Body() {
const [offsetY, setOffsetY] = useState(0);
const handleScroll = () => setOffsetY(window.pageYOffset);
useEffect(() => {
  window.addEventListener('scroll', handleScroll);

  return () =>  window.removeEventListener('scroll', handleScroll)
},[]);



useEffect(() => {
	Aos.init({duration: 2200, once:true});
}, []);



	return (
		<body className="bodyContainer" style={{ 
		 	transform: `translateY(-${ offsetY * 0.0 }px)`}}>
		<div className="bodycontent" style= {{transform: `translateY(${ offsetY * 0.4 }px)`}}>
		<h1 className="aboutme">ABOUT ME</h1>
		<div className="paddingbetween"></div>
		<p className="aboutmescrollsection"></p>
		<h2>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at sem consectetur, bibendum massa sodales, luctus turpis. Donec molestie eros bibendum tortor imperdiet imperdiet. Morbi non tincidunt mi. Cras at feugiat risus. Nam non metus dignissim, elementum purus dictum, vulputate dolor. Duis massa sapien, congue a semper at, luctus non augue. Mauris tincidunt ante vitae justo suscipit, quis commodo nunc accumsan. Cras vitae congue massa. Fusce vel interdum neque. Suspendisse potenti. Morbi id auctor erat. Vivamus hendrerit sit amet lorem ut convallis.

In at libero elit. Ut posuere nunc vel suscipit egestas. 
		<img className="skullimage" src={Skull} alt="skull" width="800px" height="500px"/>
		</h2>
		<div className="paddingbetween"></div>
		<div className="bodycontenttwo">
		<h2>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at sem consectetur, bibendum massa sodales, luctus turpis. Donec molestie eros bibendum tortor imperdiet imperdiet. Morbi non tincidunt mi. Cras at feugiat risus. Nam non metus dignissim, elementum purus dictum, vulputate dolor. Duis massa sapien, congue a semper at, luctus non augue. Mauris tincidunt ante vitae justo suscipit, quis commodo nunc accumsan. Cras vitae congue massa. Fusce vel interdum neque. Suspendisse potenti. Morbi id auctor erat. Vivamus hendrerit sit amet lorem ut convallis.

In at libero elit. Ut posuere nunc vel suscipit egestas. 
		<img className="skullimage" src={Skull} alt="skull" width="800px" height="500px"/>
		</h2>
		<div className="paddingbetween"></div>
				<h1 className="mywork">MY WORK</h1>
				<p className="myworkscrollsection"></p>
				<ImageSlider slides={SliderData} />
		</div>
		</div>
		</body>
				)
}
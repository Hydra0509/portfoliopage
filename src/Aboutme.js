import React, { useState,useEffect } from 'react'
import {RiArrowUpSLine} from 'react-icons/ri'
import ImageSwiper from './swiper.js'

export default function AboutMe() {

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
	setDivStyle({...divstyle, height:'1150px',backgroundColor:'black'})
	setArrowStyle({...arrowstyle, opacity: '1' , transitionDelay: '1.5s'})
	setDivText({...divtext, opacity:'1', transitionDelay: '0.7s'})
}

function toggleDeactivate() {
	setDivStyle({...divstyle, height:'700px',backgroundColor:''})
	setArrowStyle({...arrowstyle, opacity: '0', transitionDelay: '0s', transitionDuration: '0.2s'})
	setDivText({...divtext, opacity:'0', transitionDelay: '0s',transitionDuration: '0.8s'})
}


return (

		<div className="bodyContainer" >
			<div>
				<h1 className="aboutme">ABOUT ME</h1>
					<div className="paddingbetween"></div>
						<div style={divstyle} className="bodycontentone">
							<h1 className="divtitle">Cím/valami szöveg</h1>
								<ImageSwiper />
									<br></br>
										<button className="readmorebutton" onClick={() => toggleActivate()}>Read more</button>
											<h2 className="divtext" style={divtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at sem consectetur, bibendum massa sodales, luctus turpis. Donec molestie eros bibendum tortor imperdiet imperdiet. Morbi non tincidunt mi. Cras at feugiat risus. Nam non metus dignissim, elementum purus dictum, vulputate dolor. Duis massa sapien, congue a semper at, luctus non augue. Mauris tincidunt ante vitae justo suscipit, quis commodo nunc accumsan. Cras vitae congue massa. Fusce vel interdum neque. Suspendisse potenti. Morbi id auctor erat. Vivamus hendrerit sit amet lorem ut convallis.

											In at libero elit. Ut posuere nunc vel suscipit egestas. </h2>
												<RiArrowUpSLine style={arrowstyle} className="divarrow" onClick={() => toggleDeactivate()} />
										</div>
									</div>
										</div>

										)
}
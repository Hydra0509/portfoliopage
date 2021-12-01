import React,{useState,useEffect} from 'react'
import {ImageSwiper2,ImageSwiper3,ImageSwiper4,ImageSwiper5,ImageSwiper6,ImageSwiper7,ImageSwiper8,ImageSwiper9,ImageSwiper10,ImageSwiper11,ImageSwiper12 } from './swiper.js'
import ImageSwiper from './swiper.js'
import "./Modal.css"
import ModalAboutme from './ModalAboutme'
import ModalImages from './Modalimages.js'




export default function Bodypart() {
	return (
		<>
		<ModalAboutme />
		<body>
		<div  className="bodyimages">
		<ModalImages />
		</div>
		</body>
		</>
		)
}
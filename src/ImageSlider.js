import React, {useState} from 'react'
import SliderData from './SliderData'
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import Lorem from './loremtext'

function ImageSlider({ slides }) {
	const [current,setCurrent] = useState(0)
	const length = slides.length

	const nextSlide = () => {
		setCurrent(current === length -1 ? 0 : current + 1)
	}

		const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1)
	}


	if(!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}


return (
			<div data-aos="fade-up" className = "slider">
			<IoIosArrowDropleftCircle className="right-arrow" onClick={prevSlide} />
			<IoIosArrowDroprightCircle className="left-arrow" onClick={nextSlide} />
			{SliderData.map((slide, index) => {
				return (

						<div className={index === current ? 'slide active' : 'slide'} key={index}>
						{index === current && (<img src={slide.image} alt='beaches' className="image" />)
						}
						</div>
					)
					
			})}
			</div>
	)

}

export default ImageSlider;

   /* <ImageSlider slides={SliderData} />*/
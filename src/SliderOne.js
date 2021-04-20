import React, {useState} from 'react' 
import SliderData from './SliderData'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

function SliderOne({ slides }) {
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
			<div className = "sliderone">
			<MdKeyboardArrowLeft className="right-arrowone" onClick={prevSlide} />
			<MdKeyboardArrowRight className="left-arrowone" onClick={nextSlide} />
			{SliderData.map((slide, index) => {
				return (

						<div className={index === current ? 'slide active' : 'slide'} key={index}>
						{index === current && (<img src={slide.image} alt='beaches' className="imageone" />)
						}
						</div>
					)
					
			})}
			</div>
	)

}

export default SliderOne;
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css'
import SwiperCore, { Navigation, Pagination } from 'swiper';
import pictureskull from './images/pictureskull.jpg'
import gradientbackground1 from './images/gradientbackground1.svg'
import gradientbackground2 from './images/gradientbackground2.svg'
import gradientbackground3 from './images/gradientbackground3.svg'
import gradientbackground4 from './images/gradientbackground4.svg'

const SliderData = [
{
	image: pictureskull,
	id: 1
},
{
	image: gradientbackground1,
	id: 2
},
{
	image: gradientbackground2,
	id: 3
},
{
	image: gradientbackground3,
	id: 4
},
{
	image: gradientbackground4,
	id: 5
}
]

SwiperCore.use([Pagination,Navigation])

export default function ImageSwiper() {
  return (
    <Swiper
      navigation={{ clickable: true }}
      pagination={{ clickable: true}} 
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      { SliderData.map( SliderData => (
      	<SwiperSlide className="imageone" key={SliderData.id}>
      		<div>
      		<img className="imageone" src={SliderData.image} />
      		</div>
      	</SwiperSlide>
      	)) }


       </Swiper>
  );
};
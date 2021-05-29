import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css'
import SwiperCore, { Navigation, Pagination,Lazy } from 'swiper';
import pictureskull from './images/pictureskull.jpg'
import gradientbackground1 from './images/previewpic3.png'
import gradientbackground2 from './images/previewpic1.png'
import gradientbackground3 from './images/previewpic2.png'
import gradientbackground4 from './images/previewpic5.png'

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

SwiperCore.use([Pagination,Navigation,Lazy])

export default function ImageSwiper() {
  return (
    <Swiper
      type={'progressbar'}
      loop = {true}
      navigation={{ clickable: true }}
      pagination={{ clickable: true}} 
      spaceBetween={50}
      slidesPerView={1}
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
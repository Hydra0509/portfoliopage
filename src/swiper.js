import { Swiper, SwiperSlide } from 'swiper/react';
import React, {useState} from 'react'
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css'
import ReactImageAppear from 'react-image-appear';
import SwiperCore, { Navigation, Pagination,Lazy } from 'swiper';
import pictureskull from './images/pictureskull.jpg'
import gradientbackground1 from './images/previewpic3.png'
import gradientbackground2 from './images/previewpic1.png'
import gradientbackground3 from './images/previewpic2.png'
import gradientbackground4 from './images/previewpic5.png'
import loading from './images/loading.gif'
import './SwiperModal.css'


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


const SliderData2 = [
{
	image: pictureskull,
	id: 1
},
{
	image: gradientbackground3,
	id: 2
},
{
	image: gradientbackground4,
	id: 3
},
{
	image: gradientbackground2,
	id: 4
},
{
	image: gradientbackground1,
	id: 5
}
]

const SliderData3 = [
{
	image: pictureskull,
	id: 1
},
{
	image: gradientbackground2,
	id: 2
},
{
	image: gradientbackground1,
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

const SliderData4 = [
{
	image: pictureskull,
	id: 1
},
{
	image: gradientbackground2,
	id: 2
},
{
	image: gradientbackground1,
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

const SliderData5 = [
{
	image: pictureskull,
	id: 1
},
{
	image: gradientbackground2,
	id: 2
},
{
	image: gradientbackground1,
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

const SliderData6 = [
{
	image: pictureskull,
	id: 1
},
{
	image: gradientbackground2,
	id: 2
},
{
	image: gradientbackground1,
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

const SliderData7 = [
{
	image: pictureskull,
	id: 1
},
{
	image: gradientbackground2,
	id: 2
},
{
	image: gradientbackground1,
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

const SliderData8 = [
{
	image: pictureskull,
	id: 1
},
{
	image: gradientbackground2,
	id: 2
},
{
	image: gradientbackground1,
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

const SliderData9 = [
{
	image: pictureskull,
	id: 1
},
{
	image: gradientbackground2,
	id: 2
},
{
	image: gradientbackground1,
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

const SliderData10 = [
{
	image: pictureskull,
	id: 1
},
{
	image: gradientbackground2,
	id: 2
},
{
	image: gradientbackground1,
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

const SliderData11 = [
{
	image: pictureskull,
	id: 1
},
{
	image: gradientbackground2,
	id: 2
},
{
	image: gradientbackground1,
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

const SliderData12 = [
{
	image: pictureskull,
	id: 1
},
{
	image: gradientbackground2,
	id: 2
},
{
	image: gradientbackground1,
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
      		<ReactImageAppear loader={loading} className="imageone" src={SliderData.image} animationDuration="0.5s" />
      		</div>
      	</SwiperSlide>
      	)) }
       </Swiper>
  );
};




export function ImageSwiper2() {
  return (
    <Swiper
      type={'progressbar'}
      loop = {true}
      navigation={{ clickable: true}}
      pagination={{ clickable: true}} 
      spaceBetween={50}
      slidesPerView={1}
    >
      { SliderData2.map( SliderData2 => (
      	<SwiperSlide className="imageone" key={SliderData2.id}>
      		<div>
      		<ReactImageAppear loader={loading} className="imageone" src={SliderData2.image}  animationDuration="0.5s"  />
      		</div>
      	</SwiperSlide>
      	)) }


       </Swiper>
  );
};

export function ImageSwiper3() {
  return (
    <Swiper
      type={'progressbar'}
      loop = {true}
      navigation={{ clickable: true }}
      pagination={{ clickable: true}} 
      spaceBetween={50}
      slidesPerView={1}
    >
      { SliderData3.map( SliderData3 => (
      	<SwiperSlide className="imageone" key={SliderData3.id}>
      		<div>
      		<ReactImageAppear loader={loading} className="imageone" src={SliderData3.image}  animationDuration="0.5s"  />
      		</div>
      	</SwiperSlide>
      	)) }


       </Swiper>
  );
};

export function ImageSwiper4() {
  return (
    <Swiper
      type={'progressbar'}
      loop = {true}
      navigation={{ clickable: true }}
      pagination={{ clickable: true}} 
      spaceBetween={50}
      slidesPerView={1}
    >
      { SliderData4.map( SliderData4 => (
      	<SwiperSlide className="imageone" key={SliderData4.id}>
      		<div>
      		<ReactImageAppear loader={loading} className="imageone" src={SliderData4.image}  animationDuration="0.5s"  />
      		</div>
      	</SwiperSlide>
      	)) }


       </Swiper>
  );
};

export function ImageSwiper5() {
  return (
    <Swiper
      type={'progressbar'}
      loop = {true}
      navigation={{ clickable: true }}
      pagination={{ clickable: true}} 
      spaceBetween={50}
      slidesPerView={1}
    >
      { SliderData5.map( SliderData5 => (
      	<SwiperSlide className="imageone" key={SliderData5.id}>
      		<div>
      		<ReactImageAppear loader={loading} className="imageone" src={SliderData5.image}  animationDuration="0.5s"  />
      		</div>
      	</SwiperSlide>
      	)) }


       </Swiper>
  );
};

export function ImageSwiper6() {
  return (
    <Swiper
      type={'progressbar'}
      loop = {true}
      navigation={{ clickable: true }}
      pagination={{ clickable: true}} 
      spaceBetween={50}
      slidesPerView={1}
    >
      { SliderData6.map( SliderData6 => (
      	<SwiperSlide className="imageone" key={SliderData6.id}>
      		<div>
      		<ReactImageAppear loader={loading} className="imageone" src={SliderData6.image}  animationDuration="0.5s"  />
      		</div>
      	</SwiperSlide>
      	)) }


       </Swiper>
  );
};

export function ImageSwiper7() {
  return (
    <Swiper
      type={'progressbar'}
      loop = {true}
      navigation={{ clickable: true }}
      pagination={{ clickable: true}} 
      spaceBetween={50}
      slidesPerView={1}
    >
      { SliderData7.map( SliderData7 => (
      	<SwiperSlide className="imageone" key={SliderData7.id}>
      		<div>
      		<ReactImageAppear loader={loading} className="imageone" src={SliderData7.image}  animationDuration="0.5s"  />
      		</div>
      	</SwiperSlide>
      	)) }


       </Swiper>
  );
};

export function ImageSwiper8() {
  return (
    <Swiper
      type={'progressbar'}
      loop = {true}
      navigation={{ clickable: true }}
      pagination={{ clickable: true}} 
      spaceBetween={50}
      slidesPerView={1}
    >
      { SliderData8.map( SliderData8 => (
      	<SwiperSlide className="imageone" key={SliderData8.id}>
      		<div>
      		<ReactImageAppear loader={loading} className="imageone" src={SliderData8.image}  animationDuration="0.5s"  />
      		</div>
      	</SwiperSlide>
      	)) }


       </Swiper>
  );
};

export function ImageSwiper9() {
  return (
    <Swiper
      type={'progressbar'}
      loop = {true}
      navigation={{ clickable: true }}
      pagination={{ clickable: true}} 
      spaceBetween={50}
      slidesPerView={1}
    >
      { SliderData9.map( SliderData9 => (
      	<SwiperSlide className="imageone" key={SliderData9.id}>
      		<div>
      		<ReactImageAppear loader={loading} className="imageone" src={SliderData9.image}  animationDuration="0.5s"  />
      		</div>
      	</SwiperSlide>
      	)) }


       </Swiper>
  );
};

export function ImageSwiper10() {
  return (
    <Swiper
      type={'progressbar'}
      loop = {true}
      navigation={{ clickable: true }}
      pagination={{ clickable: true}} 
      spaceBetween={50}
      slidesPerView={1}
    >
      { SliderData10.map( SliderData10 => (
      	<SwiperSlide className="imageone" key={SliderData10.id}>
      		<div>
      		<ReactImageAppear loader={loading} className="imageone" src={SliderData10.image}  animationDuration="0.5s"  />
      		</div>
      	</SwiperSlide>
      	)) }

       </Swiper>
  );
};

export function ImageSwiper11() {
  return (
    <Swiper
      type={'progressbar'}
      loop = {true}
      navigation={{ clickable: true }}
      pagination={{ clickable: true}} 
      spaceBetween={50}
      slidesPerView={1}
    >
      { SliderData11.map( SliderData11 => (
      	<SwiperSlide className="imageone" key={SliderData11.id}>
      		<div>
      		<ReactImageAppear loader={loading} className="imageone" src={SliderData11.image}  animationDuration="0.5s"  />
      		</div>
      	</SwiperSlide>
      	)) }


       </Swiper>
  );
};

export function ImageSwiper12() {
  return (
    <Swiper
      type={'progressbar'}
      loop = {true}
      navigation={{ clickable: true }}
      pagination={{ clickable: true}} 
      spaceBetween={50}
      slidesPerView={1}
    >
      { SliderData12.map( SliderData12 => (
      	<SwiperSlide className="imageone" key={SliderData12.id}>
      		<div>
      		<ReactImageAppear loader={loading} className="imageone" src={SliderData12.image}  animationDuration="0.5s"  />
      		</div>
      	</SwiperSlide>
      	)) }


       </Swiper>
  );
};

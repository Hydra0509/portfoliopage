import React, {useEffect, useState} from 'react'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function Header() {
	const [offsetY, setOffsetY] = useState(0);
const handleScroll = () => setOffsetY(window.pageYOffset);
useEffect(() => {
  window.addEventListener('scroll', handleScroll);

  return () =>  window.removeEventListener('scroll', handleScroll)
},[]);




return (
	<header className="headertop" id = "bg"style = {{transform: `translateY(-${ offsetY * 0.10 }px)` }}>
	<h1 style={{transform: `translateY(${ offsetY * 0.5 }px)`}}>This WILL be the portfolio page!</h1>
	</header>
	)
}
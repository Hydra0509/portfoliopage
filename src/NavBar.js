import React from 'react'
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { IoIosArrowDropupCircle } from 'react-icons/io';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function NavBar() {
	return (
		<div className = "navbar">
		<ul>
		<Link activeClass="active" to="headertop" smooth={true} isDynamic={true}>
			<li>
				<a href="#">
					<span className="icon"><IoIosArrowDropupCircle /></span>
					<span className="title"></span>
				</a>
			</li>
			</Link>
			<Link activeClass="active" to="footer" spy={true}  smooth={true}>
			<li>
				<a href="#">
					<span className="icon"><IoIosArrowDropdownCircle /></span>
					<span className="title"></span>
				</a>
			</li>
			</Link>
		</ul>
		</div>
		)
}
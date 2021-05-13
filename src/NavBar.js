import React from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-scroll'

export default function NavBar() {
	return (
		<div className = "navbar">
		<ul>
		<Link activeClass="active" to="headertop" smooth={true} isDynamic={true}>
			<li>
					<button className="navbariconup"><IoIosArrowUp /></button>
			</li>
			</Link>
			<Link activeClass="active" to="logo" spy={true} offset={250}  smooth={true}>
			<li>
					<button className="navbaricondown"><IoIosArrowDown /></button>
			</li>
			</Link>
		</ul>
		</div>
		)
}
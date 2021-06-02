import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import kntur from './images/KNTUR.png'

export default function Header() {

return (
	<>
	<Link to="/portfoliopage"><img src={kntur} className="kntur" /></Link>
	<header className="headertop">
	<Link className="headerbuttons" to="/portfoliopage">Home</Link>
	<Link className="headerbuttons" to="/about">About</Link>
	<a className="headerbuttons" target="_blank" href="https://www.instagram.com/thomm.design/">Instagram</a>
	</header>
	</>
	)
}
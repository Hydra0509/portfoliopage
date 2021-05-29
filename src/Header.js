import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";

export default function Header() {

return (
	<>
	<Link className="orot" to="/portfoliopage">Orovecz Tamás</Link>
	<header className="headertop">
	<Link className="headerbuttons" to="/portfoliopage">Home</Link>
	<Link className="headerbuttons" to="/about">About me</Link>
	<a className="headerbuttons" target="_blank" href="https://www.instagram.com/thomm.design/">Instagram</a>
	</header>
	</>
	)
}
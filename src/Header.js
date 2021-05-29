import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";

export default function Header() {

return (
	<>
	<Link className="orot" to="/">Orovecz Tamás</Link>
	<header className="headertop">
	<Link className="headerbuttons" to="/">Home</Link>
	<Link className="headerbuttons" to="/about">About</Link>
	<a className="headerbuttons" target="_blank" href="https://www.instagram.com/thomm.design/">Instagram</a>
	</header>
	</>
	)
}
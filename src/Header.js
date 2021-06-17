import React, {useState} from 'react'
import kntur from './images/KNTUR.png'
import Modal from 'react-modal';

export default function Header() {
	const [modalAbout,setModalAbout] = useState(false)

	function toggleAbout() {
		setModalAbout(true)
	}
return (
	<>
	<Modal closeTimeoutMS={500} isOpen={modalAbout} onRequestClose={() => setModalAbout(false)}>
	<div>hello about me section</div>
	</Modal>
	<img src={kntur} className="kntur" />
	<header className="headertop">
	<a className="headerbuttons" onClick={toggleAbout}>About me</a>
	<a className="headerbuttons" target="_blank" href="https://www.instagram.com/thomm.design/">Instagram</a>
	</header>
	</>
	)
}
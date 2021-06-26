import React, {useState} from 'react'
import kntur from './images/KNTUR.png'
import Modal from 'react-modal';
import closebutton from './images/closebutton.png'

export default function Aboutme() {
	const [modalAbout,setModalAbout] = useState(false)

	function toggleAbout() {
		setModalAbout(true)
	}

	function closeAbout() {
		setModalAbout(false)
	}
return (
	<>
	<Modal closeTimeoutMS={500} isOpen={modalAbout} onRequestClose={() => setModalAbout(false)}>
	<div>
	<img src={closebutton} className="closeButton" onClick={closeAbout} />
	<p>HELLO THERE</p>
	</div>
	</Modal>
	<img src={kntur} className="kntur" />
	<header className="headertop">
	<a className="headerbuttons" onClick={toggleAbout}>About me</a>
	<a className="headerbuttons" target="_blank" href="https://www.instagram.com/thomm.design/">Instagram</a>
	</header>
	</>
	)
}
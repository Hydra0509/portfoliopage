import React, {useState} from 'react';
import "./Modal.css"
import kntur from './images/KNTUR.png'

export default function ModalAboutme() {
    
    const [modal,setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    const root = document.documentElement

    if (modal) {
        root.classList.add("active-modal")
    } else {
       root.classList.remove("active-modal")
    }

    return (
        <>
        <img src={kntur} className="kntur" />
	<header className="headertop">
    <a className="headerbuttons" onClick={toggleModal}>About me</a>
    <a className="headerbuttons" target="_blank" href="https://www.instagram.com/thomm.design/">Instagram</a>
    </header>
        {modal && (
            <div className="modal">
            <div onClick={toggleModal} className="overlay">
                <div className="modal-content">
                    <h2>Hello Modal</h2>
                    <p>idk</p>
                </div>
            </div>    
        </div>
        )}
        </>




    )
}
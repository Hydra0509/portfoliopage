import React, {useState} from 'react';
import "./Modal.css"
import kntur from './images/KNTUR.png'
import knturfeher from './images/knturfeher.png'
import darkModeIcon from './images/darkmodeicon.png'
import lightModeIcon from './images/lightmodeicon.png'
import {useTheme, useThemeUpdate} from './ThemeContext'



export default function ModalAboutme() {

    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        background: darkTheme ? 'rgb(32,33,36)' : 'white',
        color: darkTheme ? 'white' : 'black',
        transition: '0.5s',
        src: darkTheme ? knturfeher : kntur,
        iconsrc: darkTheme ? lightModeIcon : darkModeIcon,
    }

    
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
        
        <div style={themeStyles}>
        <img alt="Toggle Dark/Light mode" className="darkmodetoggle" style={{width:'50px',height: '50px', cursor:'pointer',transition:'0.5s',borderRadius:'20px'}} onClick={toggleTheme} src={themeStyles.iconsrc} />
        <img src={themeStyles.src} className="kntur" />
	<header className="headertop">
    <a className="headerbuttons" onClick={toggleModal}>About me</a>
    <a className="headerbuttons" target="_blank" href="https://www.instagram.com/thomm.design/">Instagram</a>
    </header>
        {modal && (
            <div className="modal">
            <div onClick={toggleModal} className="overlay">
                <div style={themeStyles} className="modal-content">
                    <h2>Hello Modal</h2>
                    <p>idk</p>
                </div>
            </div>    
        </div>
        )}
        </div>




    )
}
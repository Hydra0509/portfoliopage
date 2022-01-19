import React, {useState,useContext} from 'react';
import {useTheme, useThemeUpdate} from './ThemeContext'
import "./SwiperModal.css"
import "./Modalimages.css"
import section1pic from "./images/previewpic1.png"
import ReactImageAppear from 'react-image-appear';
import section2pic from "./images/previewpic2.png"
import section3pic from "./images/previewpic3.png"
import section4pic from "./images/previewpic4.png"
import section5pic from "./images/previewpic5.png"
import section6pic from "./images/previewpic6.png"
import section7pic from "./images/previewpic7.png"
import section8pic from "./images/previewpic8.png"
import section9pic from "./images/previewpic9.png"
import section10pic from "./images/previewpic10.png"
import section11pic from "./images/previewpic11.png"
import ImageSwiper from './swiper'
import ImageSwiper2 from './swiper'
import ImageSwiper3 from './swiper'
import ImageSwiper4 from './swiper'
import ImageSwiper5 from './swiper'
import ImageSwiper6 from './swiper'
import ImageSwiper7 from './swiper'
import ImageSwiper8 from './swiper'
import ImageSwiper9 from './swiper'
import ImageSwiper10 from './swiper'
import ImageSwiper11 from './swiper'
import ImageSwiper12 from './swiper'

export default function ModalImages() {

    const [swiperModal1,setSwiperModal1] = useState(false);
    const [swiperModal2,setSwiperModal2] = useState(false);
    const [swiperModal3,setSwiperModal3] = useState(false);
    const [swiperModal4,setSwiperModal4] = useState(false);
    const [swiperModal5,setSwiperModal5] = useState(false);
    const [swiperModal6,setSwiperModal6] = useState(false);
    const [swiperModal7,setSwiperModal7] = useState(false);
    const [swiperModal8,setSwiperModal8] = useState(false);
    const [swiperModal9,setSwiperModal9] = useState(false);
    const [swiperModal10,setSwiperModal10] = useState(false);
    const [swiperModal11,setSwiperModal11] = useState(false);
    const [swiperModal12,setSwiperModal12] = useState(false);

    const toggleSwiperModal1 = () => {
        setSwiperModal1(!swiperModal1)
    }

    const toggleSwiperModal2 = () => {
        setSwiperModal2(!swiperModal2)
    }

    const toggleSwiperModal3 = () => {
        setSwiperModal3(!swiperModal3)
    }

    const toggleSwiperModal4 = () => {
        setSwiperModal4(!swiperModal4)
    }

    const toggleSwiperModal5 = () => {
        setSwiperModal5(!swiperModal5)
    }

    const toggleSwiperModal6 = () => {
        setSwiperModal6(!swiperModal6)
    }

    const toggleSwiperModal7 = () => {
        setSwiperModal7(!swiperModal7)
    }

    const toggleSwiperModal8 = () => {
        setSwiperModal8(!swiperModal8)
    }

    const toggleSwiperModal9 = () => {
        setSwiperModal9(!swiperModal9)
    }

    const toggleSwiperModal10 = () => {
        setSwiperModal10(!swiperModal10)
    }

    const toggleSwiperModal11 = () => {
        setSwiperModal11(!swiperModal11)
    }

    const toggleSwiperModal12 = () => {
        setSwiperModal12(!swiperModal12)
    }


    
    const [modal1,setModal1] = useState(false);
    const [modal2,setModal2] = useState(false);
    const [modal3,setModal3] = useState(false);
    const [modal4,setModal4] = useState(false);
    const [modal5,setModal5] = useState(false);
    const [modal6,setModal6] = useState(false);
    const [modal7,setModal7] = useState(false);
    const [modal8,setModal8] = useState(false);
    const [modal9,setModal9] = useState(false);
    const [modal10,setModal10] = useState(false);
    const [modal11,setModal11] = useState(false);
    const [modal12,setModal12] = useState(false);

    const toggleModal1 = () => {
        setModal1(!modal1)
    }

    const toggleModal2 = () => {
        setModal2(!modal2)
    }

    const toggleModal3 = () => {
        setModal3(!modal3)
    }

    const toggleModal4 = () => {
        setModal4(!modal4)
    }

    const toggleModal5 = () => {
        setModal5(!modal5)
    }

    const toggleModal6 = () => {
        setModal6(!modal6)
    }

    const toggleModal7 = () => {
        setModal7(!modal7)
    }

    const toggleModal8 = () => {
        setModal8(!modal8)
    }

    const toggleModal9 = () => {
        setModal9(!modal9)
    }

    const toggleModal10 = () => {
        setModal10(!modal10)
    }

    const toggleModal11 = () => {
        setModal11(!modal11)
    }

    const toggleModal12 = () => {
        setModal12(!modal12)
    }

    const root = document.documentElement

    if (modal1 || modal2 || modal3 || modal4 || modal5 || modal6
        || modal7 || modal8 || modal9 || modal10 || modal11 || modal12 || swiperModal1
        || swiperModal2 || swiperModal3 || swiperModal4 || swiperModal5 || swiperModal6 ||
        swiperModal7 || swiperModal8 || swiperModal9 || swiperModal10 || swiperModal11 || swiperModal12) {
        root.classList.add("active-modal")
    } else {
       root.classList.remove("active-modal")
    }

    const darkTheme = useTheme()
    const themeStyles = {
        background: darkTheme ? 'rgb(32,33,36)' : 'white',
        color: darkTheme ? 'white' : 'black',
        transition: '0.5s'
    }


    return (
        <>
        <div style={themeStyles} className="bodyimages">
            <div className="picturediv" onClick={toggleModal1}>
                    <ReactImageAppear onClick={toggleModal1} className="section" src={section1pic} animationDuration="1s"></ReactImageAppear>
                    <div onClick={toggleModal1} className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
            </div>



            <div className="picturediv" onClick={toggleModal2}>
                    <ReactImageAppear onClick={toggleModal2} className="section" src={section2pic} animationDuration="1s"></ReactImageAppear>
                    <div onClick={toggleModal2} className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
            </div>



                    <div className="picturediv" onClick={toggleModal3}>
                    <ReactImageAppear onClick={toggleModal3} className="section" src={section3pic} animationDuration="1s"></ReactImageAppear>
                    <div onClick={toggleModal3} className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
            </div>



                    <div className="picturediv" onClick={toggleModal4}>
                    <ReactImageAppear onClick={toggleModal4} className="section" src={section4pic} animationDuration="1s"></ReactImageAppear>
                    <div onClick={toggleModal4} className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
            </div>


            <div className="picturediv" onClick={toggleModal5}>
                    <ReactImageAppear onClick={toggleModal5} className="section" src={section5pic} animationDuration="1s"></ReactImageAppear>
                    <div onClick={toggleModal5} className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
            </div>



            <div className="picturediv" onClick={toggleModal6}>
                    <ReactImageAppear onClick={toggleModal6} className="section" src={section6pic} animationDuration="1s"></ReactImageAppear>
                    <div onClick={toggleModal6} className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
            </div>



            <div className="picturediv" onClick={toggleModal7}>
                    <ReactImageAppear onClick={toggleModal7} className="section" src={section7pic} animationDuration="1s"></ReactImageAppear>
                    <div onClick={toggleModal7} className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
            </div>



            <div className="picturediv" onClick={toggleModal8}>
                    <ReactImageAppear onClick={toggleModal8} className="section" src={section8pic} animationDuration="1s"></ReactImageAppear>
                    <div onClick={toggleModal8} className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
            </div>



            <div className="picturediv" onClick={toggleModal9}>
                    <ReactImageAppear onClick={toggleModal9} className="section" src={section9pic} animationDuration="1s"></ReactImageAppear>
                    <div onClick={toggleModal9} className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
            </div>



            <div className="picturediv" onClick={toggleModal10}>
                    <ReactImageAppear onClick={toggleModal10} className="section" src={section10pic} animationDuration="1s"></ReactImageAppear>
                    <div onClick={toggleModal10} className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
            </div>



            <div className="picturediv" onClick={toggleModal11}>
                    <ReactImageAppear onClick={toggleModal11} className="section" src={section11pic} animationDuration="1s"></ReactImageAppear>
                    <div onClick={toggleModal11} className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
            </div>



            <div className="picturediv" onClick={toggleModal12}>
                    <ReactImageAppear onClick={toggleModal12} className="section" src={section11pic} animationDuration="1s"></ReactImageAppear>
                    <div onClick={toggleModal12} className="picturetext"><p>LOREM IPSUM DOLOR</p></div>
            </div>
        </div>

{swiperModal1 && (
    <div className="swiper-modal">
            <div onClick={toggleSwiperModal1} className="swiper-overlay"></div>
                <div className="swiper-modal-content">
                        <ImageSwiper />
                    </div>   
     </div>
)}

{swiperModal2 && (
    <div className="swiper-modal">
            <div onClick={toggleSwiperModal2} className="swiper-overlay"></div>
                <div className="swiper-modal-content">
                        <ImageSwiper2 />
                    </div>   
     </div>
)}

{swiperModal3 && (
    <div className="swiper-modal">
            <div onClick={toggleSwiperModal3} className="swiper-overlay"></div>
                <div className="swiper-modal-content">
                        <ImageSwiper3 />
                    </div>   
     </div>
)}

{swiperModal4 && (
    <div className="swiper-modal">
            <div onClick={toggleSwiperModal4} className="swiper-overlay"></div>
                <div className="swiper-modal-content">
                        <ImageSwiper4 />
                    </div>   
     </div>
)}

{swiperModal5 && (
    <div className="swiper-modal">
            <div onClick={toggleSwiperModal5} className="swiper-overlay"></div>
                <div className="swiper-modal-content">
                        <ImageSwiper5 />
                    </div>   
     </div>
)}

{swiperModal6 && (
    <div className="swiper-modal">
            <div onClick={toggleSwiperModal6} className="swiper-overlay"></div>
                <div className="swiper-modal-content">
                        <ImageSwiper6 />
                    </div>   
     </div>
)}

{swiperModal7 && (
    <div className="swiper-modal">
            <div onClick={toggleSwiperModal7} className="swiper-overlay"></div>
                <div className="swiper-modal-content">
                        <ImageSwiper7 />
                    </div>   
     </div>
)}

{swiperModal8 && (
    <div className="swiper-modal">
            <div onClick={toggleSwiperModal8} className="swiper-overlay"></div>
                <div className="swiper-modal-content">
                        <ImageSwiper8 />
                    </div>   
     </div>
)}

{swiperModal9 && (
    <div className="swiper-modal">
            <div onClick={toggleSwiperModal9} className="swiper-overlay"></div>
                <div className="swiper-modal-content">
                        <ImageSwiper9 />
                    </div>   
     </div>
)}

{swiperModal10 && (
    <div className="swiper-modal">
            <div onClick={toggleSwiperModal10} className="swiper-overlay"></div>
                <div className="swiper-modal-content">
                        <ImageSwiper10 />
                    </div>   
     </div>
)}

{swiperModal11 && (
    <div className="swiper-modal">
            <div onClick={toggleSwiperModal11} className="swiper-overlay"></div>
                <div className="swiper-modal-content">
                        <ImageSwiper11 />
                    </div>   
     </div>
)}

{swiperModal12 && (
    <div className="swiper-modal">
            <div onClick={toggleSwiperModal12} className="swiper-overlay"></div>
                <div className="swiper-modal-content">
                        <ImageSwiper12 />
                    </div>   
     </div>
)}

        {modal1 && (
            <div className="modalimage">
            <div onClick={toggleModal1} className="overlayimage"></div>
                <div style={themeStyles} className="modalimage-content">
                    <h2>Hello Modal 1</h2>
                    <p>idk</p>
                        <img style={{ cursor: 'zoom-in' }} onClick={toggleSwiperModal1} src={section1pic}></img>
                    </div>   
        </div>
        )}



        {modal2 && (
            <div className="modalimage">
            <div onClick={toggleModal2} className="overlayimage"></div>
                <div style={themeStyles}  className="modalimage-content">
                    <h2>Hello Modal 2</h2>
                    <p>idk</p>
                    <p>idk</p>
                        <img style={{ cursor: 'zoom-in' }} onClick={toggleSwiperModal2} src={section1pic}></img>
                </div>  
        </div>
        )}



        {modal3 && (
            <div className="modalimage">
            <div onClick={toggleModal3} className="overlayimage"></div>
                <div style={themeStyles}  className="modalimage-content">
                    <h2>Hello Modal 3</h2>
                    <p>idk</p>
                    <p>idk</p>
                        <img style={{ cursor: 'zoom-in' }} onClick={toggleSwiperModal3} src={section1pic}></img>
                </div>  
        </div>
        )}



        {modal4 && (
            <div className="modalimage">
            <div onClick={toggleModal4} className="overlayimage"></div>
                <div style={themeStyles}  className="modalimage-content">
                    <h2>Hello Modal 4</h2>
                    <p>idk</p>
                    <p>idk</p>
                        <img style={{ cursor: 'zoom-in' }} onClick={toggleSwiperModal4} src={section1pic}></img>
                </div>  
        </div>
        )}



        {modal5 && (
            <div className="modalimage">
            <div onClick={toggleModal5} className="overlayimage"></div>
                <div style={themeStyles}  className="modalimage-content">
                    <h2>Hello Modal 5</h2>
                    <p>idk</p>
                    <p>idk</p>
                        <img style={{ cursor: 'zoom-in' }} onClick={toggleSwiperModal5} src={section1pic}></img>
            </div>    
        </div>

)}


        {modal6 && (
            <div className="modalimage">
            <div onClick={toggleModal6} className="overlayimage"></div>
                <div style={themeStyles}  className="modalimage-content">
                    <h2>Hello Modal 6</h2>
                    <p>idk</p>
                    <p>idk</p>
                        <img style={{ cursor: 'zoom-in' }} onClick={toggleSwiperModal6} src={section1pic}></img>
            </div>    
        </div>
        )}
        


        {modal7 && (
            <div className="modalimage">
            <div onClick={toggleModal7} className="overlayimage"></div>
                <div style={themeStyles} className="modalimage-content">
                    <h2>Hello Modal 7</h2>
                    <p>idk</p>
                    <p>idk</p>
                        <img style={{ cursor: 'zoom-in' }} onClick={toggleSwiperModal7} src={section1pic}></img>
            </div>    
        </div>
        )}



        {modal8 && (
            <div className="modalimage">
            <div onClick={toggleModal8} className="overlayimage"></div>
                <div style={themeStyles} className="modalimage-content">
                    <h2>Hello Modal 8</h2>
                    <p>idk</p>
                    <p>idk</p>
                        <img style={{ cursor: 'zoom-in' }} onClick={toggleSwiperModal8} src={section1pic}></img>
            </div>    
        </div>
        )}



        {modal9 && (
            <div className="modalimage">
            <div onClick={toggleModal9} className="overlayimage"></div>
                <div style={themeStyles}  className="modalimage-content">
                    <h2>Hello Modal 9</h2>
                    <p>idk</p>
                    <p>idk</p>
                        <img style={{ cursor: 'zoom-in' }} onClick={toggleSwiperModal9} src={section1pic}></img>
            </div>    
        </div>
        )}
        


        {modal10 && (
            <div className="modalimage">
            <div onClick={toggleModal10} className="overlayimage"></div>
                <div style={themeStyles} className="modalimage-content">
                    <h2>Hello Modal 10</h2>
                    <p>idk</p>
                    <p>idk</p>
                        <img style={{ cursor: 'zoom-in' }} onClick={toggleSwiperModal10} src={section1pic}></img>
            </div>    
        </div>
        )}


        {modal11 && (
            <div className="modalimage">
            <div onClick={toggleModal11} className="overlayimage"></div>
                <div style={themeStyles}  className="modalimage-content">
                    <h2>Hello Modal 11</h2>
                    <p>idk</p>
                    <p>idk</p>
                        <img style={{ cursor: 'zoom-in' }} onClick={toggleSwiperModal11} src={section1pic}></img>
            </div>    
        </div>
        )}


        {modal12 && (
            <div className="modalimage">
            <div onClick={toggleModal12} className="overlayimage"></div>
                <div style={themeStyles}  className="modalimage-content">
                    <h2>Hello Modal 12</h2>
                    <p>idk</p>
                    <p>idk</p>
                        <img style={{ cursor: 'zoom-in' }} onClick={toggleSwiperModal12} src={section1pic}></img>
            </div>    
        </div>
        )}
</>
       )}
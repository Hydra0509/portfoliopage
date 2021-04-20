import './App.css';
import Header from './Header'
import Body from './Body'
import NavBar from './NavBar'
import Footer from './Footer'
import React, { useEffect} from 'react'
function App() {

	useEffect(() => {
   document.title = "Orovecz Tamás/Graphic Designer"
}, []);

  return (
    <>
    <Header />
    <Body />
    <NavBar />
    <Footer />
    </>
  );
}

export default App;

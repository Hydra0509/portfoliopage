import './App.css';
import Header from './Header'
import Body from './Body'
import NavBar from './NavBar'
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
    </>
  );
}

export default App;

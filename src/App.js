import './App.css';
import Body from './Body'
import AboutMe from './Aboutme'
import React, { useEffect} from 'react'
function App() {

	useEffect(() => {
   document.title = "Kntúr."
}, []);

  return (
    <>
    <Body />
    </>
  );
}

export default App;

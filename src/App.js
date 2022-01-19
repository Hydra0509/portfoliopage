import "./Modal.css"
import React, {useState, useEffect, createContext} from 'react'
import ModalImages from "./Modalimages";
import ModalAboutme from "./ModalAboutme";
import { ThemeProvider } from "./ThemeContext";

function App() {
	useEffect(() => {
   document.title = "Kntúr."
}, []);


  return (
    
    <ThemeProvider>
      <ModalAboutme />
        <div className="bodyimages">
		  <ModalImages />
		    </div>
    </ThemeProvider>
  );
}

export default App;

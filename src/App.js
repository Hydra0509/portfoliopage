import './App.css';
import Header from './Header'
import Body from './Body'
import NavBar from './NavBar'
import body2 from './body2'
import React, { useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {

	useEffect(() => {
   document.title = "Orovecz Tamás/Graphic Designer"
}, []);

  return (
  	<Router>
    <>
    <Header />
    	<Switch>
       		<Route path="/" exact component={Body} />
       		 <Route path="/about"  component={body2} />
    	</Switch>
    </>
    </Router>
  );
}

export default App;

import './App.css';
import Header from './Header'
import Body from './Body'
import AboutMe from './Aboutme'
import React, { useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {

	useEffect(() => {
   document.title = "Kntúr"
}, []);

  return (
  	<Router>
    <>
    <Header/>
    	<Switch>
       		<Route path="/portfoliopage" exact component={Body} />
       		 <Route path="/about" component={AboutMe} />
    	</Switch>
    </>
    </Router>
  );
}

export default App;

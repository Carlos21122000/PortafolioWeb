//import Header from '../Header.js';
import React, {Component} from "react";
import Navbar from "./Nav/NavBar";
import Main from "./Main/main";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Personal from "./Personal/personal";
import Portafolio from "./Portafolio/portafolio";
import Last from "./Last/Last";
import "./App.css";


class App extends Component {
    render(){
        return(
            <div>
            <Navbar/>
            <Main />
            <Personal/>
            <About/>
            <Portafolio />
            <Contact/>  
            <Last/>  
            </div>
        )
    }
}
export default App;
import React, {Component} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import Main from "./Main";
import "./css/style.css" ;

class App extends Component { 
   render() {
     return(
       <div>
       <Navbar/>
       <Main/>
       </div>
     )
   }
}

export default App;

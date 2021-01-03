import React , {Component} from "react";
import Helper from "./Helper";
import photo from "./images/zeynalli.jpeg"

class Main extends Component {
    render(){
        return (
            <Helper imgSrc={photo}  btnname="Contact with Me" /> 
            
        )
    }
}
export default Main;
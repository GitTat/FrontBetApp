import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Boardstyle.css';
import Header from "./components/Header.js"
import Menu from "./components/Menu.js";

class Board extends Component{
  render(){
    return(
      <div className="return">
        <Header/>
        <Menu/>
      </div>
    );
  }

}
ReactDOM.render(
    <Board/>,
   document.getElementById("root")
 );

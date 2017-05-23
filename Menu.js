import React,{Component} from 'react';
import '../Boardstyle.css';

class Menu extends Component{
  render(){
    return(
        <nav className="menu flex" role="navigation">
            <ul className="list_menu">
                <li className="menu_item"><a href="">Dashboard</a></li>
                <li className="menu_item"><a href="">Mailing</a></li>
                <li className="menu_item"><a href="">Template</a></li>
                <li className="menu_item"><a href="">Sending</a></li>
            </ul> 
		</nav>
    );
  }
}

export default Menu;

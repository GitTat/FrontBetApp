import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './StyleSheet/Menu.css';

class Menu extends Component{
  render(){
    return(
      
          <div className="menu">
                  <ul className="list_menu">
                      <li className="menu_item"><Link activeClassName="active" to='/table'>Table </Link></li>
                      <li className="menu_item"><Link activeClassName="active" to='/addmailinglist'>MailList </Link></li>
                 </ul>
          </div>
      
    );
  }
}

export default Menu;

import './Menu.css';
import AddMailingList from'./AddMailingList';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Switch,withRouter } from 'react-router-dom'
import { Route, Redirect } from 'react-router'

class Menu extends Component{
  render(){
    return(
      
          <div className="Menu">
                  <ul className="list_menu">
                      <li className="menu_item"><Link activeClassName="active" to='/table'>Table </Link></li>
                      <li className="menu_item"><Link activeClassName="active" to='/addmailinglist'>MailList </Link></li>
                      
                 </ul>
          </div>
      
    );
  }
}

export default Menu;

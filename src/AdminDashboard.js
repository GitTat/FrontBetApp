import './Boardstyle.css';
import './Table.css';
import React, { Component } from 'react';
import Table from './TableComponent/Table.js'
import array from './array.js';
import Header from "./Header.js"
import Menu from "./Menu.js";
import AddMailingList from'./AddMailingList';


import { Switch,withRouter } from 'react-router-dom'
import { Redirect, Router, Route, DefaultRoute, browserHistory   } from 'react-router'

class AdminDashboard extends Component{
  render(){
    return(
      <div className="return">
        <Header/>
        <Menu/>
       <Switch>
				      <Route path='/table' component={Table}/>
							<Route path='/addmailinglist' component={AddMailingList}/>
				</Switch>
      </div>
    );
  }

}
export default AdminDashboard;
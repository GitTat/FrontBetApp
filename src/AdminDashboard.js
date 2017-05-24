import './Boardstyle.css';
import React, { Component } from 'react';
import Table from './TableComponent/Table.js'
import Header from "./Header.js"
import Menu from "./Menu.js";
import AddMailingList from'./AddMailingList';


import { Switch } from 'react-router-dom'
import { Route} from 'react-router'

class AdminDashboard extends Component{
  render(){
    return(
      <div >
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
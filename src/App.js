import React, { Component } from 'react';
import array from './array.js';
import AdminDashboard from './AdminDashboard.js';
import Login from'./Login.js';
import { Switch } from 'react-router-dom'
import { Route, Redirect } from 'react-router'


console.log('array:', array);

class App extends Component {

  render() {
    return (
      <div>
             <Switch>
              <Route exact path='/' render={() => (
                false ? (
                  <Redirect to="/login"/>
                ) : (
                  <AdminDashboard/>
                )
              )}/>
              <Route path='/login' component={Login}/>
              <Route path='/' exactly component={AdminDashboard}/>
            </Switch>
          </div>
    );
  }
}

export default App;

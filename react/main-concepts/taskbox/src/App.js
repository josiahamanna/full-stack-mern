import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'



import Dashboard from './componets/dashbord/index'

import './App.css';
import ProjectList from './componets/projects/list'
import AddProject from './componets/projects/add';
import EditProject from './componets/projects/edit'
import ShowProject from './componets/projects/show'

import ListUsers from './componets/users/list';
import UserShow from './componets/users/show'
import UserEdit from './componets/users/edit'


import UserAdd from './componets/users/add';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h2> TaskBox </h2>
          <ul>
            <li> <Link to='/'> Dashboard </Link></li>
            <li> <Link to='/projects'> Projects </Link></li>
            <li> <Link to='/users'> Users </Link></li>
          </ul>
          <Switch>
            <Route path='/' component={Dashboard} exact />

            <Route path='/projects' component={ProjectList} exact />
            <Route path='/projects/add' component={AddProject} exact />
            <Route path='/projects/edit/:id' component={EditProject} exact />
            <Route path='/projects/:id' component={ShowProject} exact />

            <Route path='/users' component={ListUsers} exact />
            <Route path='/users/add' component={UserAdd} exact />
            <Route path='/users/:id' component={UserShow} exact />
            <Route path='/users/edit/:id' component={UserEdit} exact />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React, {Component} from 'react'
import { BrowserRouter, Link, Route, Switch} from 'react-router-dom'
// import { deflate } from 'zlib';
import Home from './home'
import About from './about'
import Contact from './contact'
import Api from './api'
import Leadership from './leadership'
import ShowUser from './show-users';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ul>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/about">About</Link></li>
            <li> <Link to="/contact">Contact</Link></li>
            <li> <Link to='/users'> users </Link></li>
          </ul>

          <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/about" component = {About} exact/>
              <Route path="/about/leadership" component={Leadership} />
              <Route path="/contact" component={Contact} />
              <Route path="/users" component={Api} exact/>
              <Route path="/users/:id" component={ShowUser} />
              <Route render={()=>{return <h2>404</h2>}}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
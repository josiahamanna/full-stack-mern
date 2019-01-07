import React, { Component } from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import './App.css';
import ListPlayer from './list'
import AddPlayer from './add'

class App extends Component {

  constructor(){
    super()
    this.state = {
      playerArray: [],
      notice: ''
    }

    this.submitHandle = this.submitHandle.bind(this)
  }

  submitHandle(id, name){
    let data = JSON.stringify({
      id: id,
      name: name
    })
    let fetchData = {
      method: 'POST', 
      body: data,
      headers: {"Content-Type": "application/json"}
    }
    fetch('http://localhost:3001/players', fetchData)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      this.setState(preState=>({
        playerArray: preState.playerArray.concat(data.players),
        notice: data.notice
      }))})
  }

  componentDidMount(){
    console.log('component did mount')
    fetch('http://localhost:3001/players')
    .then(res=>res.json())
    .then(data=>{
      this.setState({
        playerArray: data
      })
    })
  }

  render() {
    return (
         <BrowserRouter>
         <div className="App">
            <h2> Players </h2>
            <Link to = "/list" > List players </Link>
            <Link to = "/add"> Add players </Link>
            <Switch>
                <Route path="/list" render={()=><ListPlayer playerArray={this.state.playerArray} exact/>}/>
                <Route path="/add" render={()=><AddPlayer notice={this.state.notice} submitHandle={this.submitHandle}/>}/>
            </Switch>
            
         </div>
         </BrowserRouter>
    )
  }
}

export default App;

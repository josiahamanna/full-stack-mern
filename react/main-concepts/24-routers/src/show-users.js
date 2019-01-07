import React from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'


class ShowUser extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            user:'', 
            loading: false
        }
    }


    render(){

        let id, email, username 
        if(this.props.location.state) {
            const { state } = this.props.location
            console.log(state)
            id = state.id
            email = state.email
            username = state.username
        } else {
            return <Redirect to='.'/>
        }
        return(
            <div>
                <h2> user Detail </h2>
                {
                    this.state.loading
                    ? <p> fetching data </p>
                    : <div> 
                        <p>id = {id}</p>
                        <p>email = {email}</p>
                        <p> username= {username}</p>
                        <Link to="/users"> back </Link>
                    </div>
                }
            </div>
        )
    }
}
  export default ShowUser
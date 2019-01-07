import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Api extends React.Component {
    constructor(){
        super()
        this.state = {
            users:'',
            isLoading:true
        }
    }

    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/users').then(response=>{
            this.setState({
                users:response.data,
                isLoading:false
            })
        })
    }

    render(){
        return(
            <div>
                <ul>
                    {
                        this.state.isLoading
                        ? 'fetchingdata'
                        : this.state.users.map(user=>{
                            return <li key ={user.id}> <Link to={{
                                pathname: `/users/${user.id}`,
                                state: {
                                    truthy: this.state.isLoading,
                                    id: user.id,
                                    username: user.username,
                                    email: user.email,
                                    name: user.name
                                }
                            }}> {user.name} </Link></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Api
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const ListUsers = (props) => {
    return (
        <div>
            <h2> Listing users </h2>
            <ul>
                {props.users.map(user => <li key={user.id}> <Link to={`/users/${user.id}`}>{user.username}</Link> </li>)}
            </ul>
            <Link to='/users/add'> Add user </Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(ListUsers)
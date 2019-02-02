import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeUser } from '../../actions/users'

const UserShow = (props) => {
    return (
        <div>
            {props.user ?
                <div>
                    <h2> User Name - {props.user.username}</h2>
                    <p> Email - {props.user.email}</p>
                    <p> Mobile - {props.user.mobile}</p>
                    <Link to={`/users/edit/${props.user.id}`}> Edit </Link><br />
                    <button onClick={() => {
                        props.dispatch(removeUser(props.user.id))
                        props.history.push('/users')
                    }}> delete </button>
                </div> :
                ''}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        user: state.users.find(user => user.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(UserShow)
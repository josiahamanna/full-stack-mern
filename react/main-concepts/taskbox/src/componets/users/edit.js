import React from 'react'
import UserForm from './form'
import { connect } from 'react-redux'
import { editUser } from '../../actions/users'

const UsersEdit = (props) => {
    return (
        <div>
            <h2> Edit Page </h2>
            <UserForm user={props.user} handleSubmit={(user) => {
                props.dispatch(editUser(user, props.match.params.id))
                props.history.push(`/users/${props.match.params.id}`)
            }} />
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        user: state.users.find(user => user.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(UsersEdit)

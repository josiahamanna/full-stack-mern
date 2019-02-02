import React from 'react'
import AddProjectForm from './form';
import { connect } from 'react-redux'
import { addProject } from '../../actions/project'

const AddProject = (props) => {

    const handleSubmit = (formData) => {
        props.dispatch(addProject(formData))
        props.history.push('/projects')
    }

    return (
        <div>
            <h2> Add Project </h2>
            <AddProjectForm handleSubmit={handleSubmit} />
        </div>
    )
}

export default connect()(AddProject)
import React from 'react'
import { connect } from 'react-redux'
import AddProjectForm from './form';
import { editProject } from '../../actions/project';

const EditProject = (props) => {


    return (
        <div>
            <h2> edit page </h2>
            <AddProjectForm project={props.project} handleSubmit={(project) => {
                // console.log(project, props.match.params.id)
                props.dispatch(editProject(props.match.params.id, project))
                props.history.push(`/projects/${props.match.params.id}`)
            }} />
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        project: state.projects.find(project => project.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditProject)
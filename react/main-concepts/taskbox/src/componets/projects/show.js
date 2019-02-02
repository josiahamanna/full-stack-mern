import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeProject } from '../../actions/project'

const ShowProject = (props) => {
    return (
        <div>
            {props.project ?
                <div>
                    <h2> {props.project.id} </h2>
                    <p> {props.project.name} </p>
                    <p> {props.project.description} </p>
                    <Link to={`/projects/edit/${props.project.id}`}> edit </Link>
                    <button onClick={() => {
                        props.dispatch(removeProject(props.project.id))
                        props.history.push('/projects')
                    }}> Delete </button>

                </div> : ''}
            <Link to="/projects"> Back </Link>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        project: state.projects.find(project => project.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(ShowProject)
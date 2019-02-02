import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeProject } from '../../actions/project'


const ProjectList = (props) => {
    return (
        <div>
            <h2> Listing Projects </h2>
            <ul>
                {props.projects.map(project => <li key={project.id}> <Link to={`/projects/${project.id}`}>{project.name}</Link>
                    {/* <button onClick={() => {
                        props.dispatch(removeProject(project.id))
                    }}> Delete </button> */}
                </li>)}
            </ul>
            {/* <Link to="/projects/edit" > Edit project </Link> */}
            <Link to="/projects/add"> Add project </Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects
    }
}

export default connect(mapStateToProps)(ProjectList)
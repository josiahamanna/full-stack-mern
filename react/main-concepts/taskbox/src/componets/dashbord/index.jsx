import React from 'react'
import { connect } from 'react-redux'

const Dashbord = (props) => {
    return (
        <div>
            <h2> Dashbord </h2>
            <h3> Recently added </h3>
            {props.project && <p> {props.project.name} </p>}
            {/* {console.log(props.project)} */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        project: state.projects[state.projects.length - 1]
    }
}

export default connect(mapStateToProps)(Dashbord)
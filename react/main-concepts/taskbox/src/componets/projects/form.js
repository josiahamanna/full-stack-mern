import React, { Component } from 'react'
import uuid from 'uuid'

class AddProjectForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.project ? props.project.id : uuid(),
            name: props.project ? props.project.name : '',
            description: props.project ? props.project.description : ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        const formData = {
            id: this.state.id,
            name: this.state.name,
            description: this.state.description
        }
        // console.log(formData)
        this.props.handleSubmit(formData)
    }

    handleNameChange(event) {
        const name = event.target.value
        this.setState(() => ({ name }))
    }

    handleDescriptionChange(event) {
        const description = event.target.value
        this.setState(() => ({ description }))
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                </label><br />
                <label>
                    Decription
                    <input type="text" value={this.state.description} onChange={this.handleDescriptionChange} />
                </label><br />
                <input type="submit" value="submit" />
            </form>
        )
    }
}

export default AddProjectForm
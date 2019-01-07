import React, { Component } from 'react'

class AddPlayer extends React.Component {

    constructor(){
        super()
        this.state = {
            id: '',
            name: ''
        }
        this.submitHandle = this.submitHandle.bind(this)
        this.changeHandle = this.changeHandle.bind(this)
    }

    changeHandle(event){
        event.persist()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandle(event){
        event.preventDefault()
        this.props.submitHandle(this.state.id, this.state.name)
        this.setState({
            id: '',
            name: ''
        })
    }
    
    render() {
        return(
            <div>
                <form onSubmit={this.submitHandle}>
                    <label>
                        Id <input type="text" value={this.state.id} onChange={this.changeHandle} name = "id" required/>
                    </label><br/>
                    <label>
                        Name <input type="text" value={this.state.name} onChange={this.changeHandle} name = "name" required/>
                    </label><br/>
                    <input type="submit" value="submit"/>
                </form>
                <span> {this.props.notice} </span>
            </div>
        )
    }
}

export default AddPlayer
import React, { Component } from 'react';

export default class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = e => {
        this.props.addTask(this.state.title, this.state.description)
        e.preventDefault()

    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="title"
                    type="text"
                    placeholder='Write a Task'
                    onChange={this.onChange}
                    value={this.state.title} />
                <br />
                <br />
                <textarea
                    name="description"
                    placeholder='Write a Description'
                    onChange={this.onChange}
                    value={this.state.description} />
                <input type="submit" value="Enviar" />
            </form>
        )
    }
}
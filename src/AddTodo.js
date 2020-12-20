import React, { Component } from 'react'

class AddTodo extends Component {
    
    constructor(props) {
        super(props);
        this.inputEl = React.createRef();
    }

    state = {
        content: ''
    };


    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if(this.state.content) {
            this.props.addTodo(this.state);
            this.setState({
                content : ''
            });
        }
        else {
            alert('Please enter todo');
            this.inputEl.current.focus();
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo: </label>
                    <input 
                    ref={this.inputEl}
                    type="text" 
                    value={this.state.content} 
                    onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}

export default AddTodo
import React, { Component } from "react";
import './todo.css'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.description,
            done: false
        }

        this.markAsDone = this.markAsDone.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    markAsDone() {
        this.setState({ done: true })
    }

    removeTodo() {
        this.props.removeTodo(this.state.description);
    }

    cssClasses() {
        let classes = ['Todo'];
        if (this.state.done) {
            classes = [...classes, 'Done'];
        }
        return classes.join(' ');
        }

        

    render() {
        return (
            <div className={this.cssClasses()}>{this.state.description}
                <br />
                <button onClick={this.markAsDone}>Mark as Done</button>
                <br />
                <button onClick={this.removeTodo}>Remove</button>
            </div>
        );
    }
}


export default Todo;
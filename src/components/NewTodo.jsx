import React, { Component } from 'react';
import { Button, Input } from '@chakra-ui/react';

class NewTodo extends Component {
    constructor(props) {
        super(props);
        this.state = { item: '' };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    handleUpdate(event) {
        this.setState({ item: event.target.value });
    }

    addTodo() {
        this.props.addTodo(this.state.item);
        this.setState({ item: ''});
    }

    render() {
        return(
            <div className="NewTodo">

                <Input type="text" isInvalid variant="flushed" errorBorderColor='red.200' onChange={this.handleUpdate} value={this.state.item} />
                <br></br><br></br>
                <Button onClick={this.addTodo}>Add</Button>

                <br></br><br></br>

            </div>
        )
    }
}

export default NewTodo;
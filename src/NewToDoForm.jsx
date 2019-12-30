import React from 'react';
import uuid from 'uuid/v4';

class NewToDoForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            task: ''
        }

        //functions below are arrow functios so need to bind 'this'
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.createToDo({...this.state, id: uuid(), completed: false});
        this.setState({ task: ''}); //ensuring the text field is reset to an empty string on form submission 
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='task'>New ToDo</label>
                <input 
                    type='text' 
                    placeholder='Enter New ToDo' 
                    id='task'
                    name='task'
                    value={this.state.task}
                    onChange={this.handleChange}
                />
                <button>Add ToDo</button>
            </form>
        )
    }
}

export default NewToDoForm; 
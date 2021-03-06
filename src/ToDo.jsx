import React from 'react';
import './ToDo.css';

class ToDo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleRemove(){
        this.props.removeToDo(this.props.id)
    }

    toggleForm(){
        this.setState({isEditing: !this.state.isEditing})
    }

    handleUpdate(event){
        event.preventDefault(); //Prevent form from refreshing 
        //take new task data and pass up to parent 
        this.props.updateToDo(this.props.id, this.state.task);
        this.setState({isEditing: false});

    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    } 

    handleToggle(event){
        this.props.toggleToDo(this.props.id);
    }

    render(){
        let result;
        if(this.state.isEditing){
            result = (
                <div className='ToDo'>
                    <form onSubmit={this.handleUpdate}>
                        <input 
                            type='text' 
                            value={this.state.task} 
                            name='task'
                            onChange={this.handleChange}
                            />
                        <button>Save</button>
                    </form>
                </div>                
            );
        }else{
            result = (
                <div className='ToDo'>
                    <button onClick={this.toggleForm}>Edit</button>
                    <button onClick={this.handleRemove}>Delete</button>
                    <li 
                        className={this.props.completed ? 'completed': ''}
                        onClick={this.handleToggle}
                    >{this.props.task}</li>
                </div>
            );
        }
        return result;
    }
}

export default ToDo; 
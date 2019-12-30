import React from 'react';
import ToDo from './ToDo';
import NewToDoForm from './NewToDoForm';
import './ToDoList.css';

class ToDoList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            todos: []
        };
        //Functions below are not arrow functions so need to bind 'this'
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    create(newTodo){
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }

    remove(id){
        this.setState({
            todos: this.state.todos.filter(td => td.id !== id) 
        });
    }

    update(id, updatedTask){
        const updatedToDos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, task: updatedTask}
            }
            return todo;
        });
        //Set State with the array of updated todos
        this.setState({todos: updatedToDos});
    }

    toggleCompletion(id){
        const updatedToDos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, completed: !todo.completed}
            }
            return todo;
        });
        //Set State with the array of updated todos
        this.setState({todos: updatedToDos});
    }

    render(){

        const todos = this.state.todos.map(todo => {
            return <ToDo 
                key={todo.id} 
                id={todo.id}
                task={todo.task} 
                completed={todo.completed}
                removeToDo={this.remove}
                updateToDo={this.update}
                toggleToDo={this.toggleCompletion}
                />;
        })

        return(
            <div className='ToDoList'>
                <h2>ToDo List App</h2>                
                <ul>
                    {todos}
                </ul>
                <NewToDoForm createToDo={this.create}/>
            </div>
        )
    }
}

export default ToDoList; 
import React from 'react';
import ToDo from './ToDo';
import NewToDoForm from './NewToDoForm';

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

    render(){

        const todos = this.state.todos.map(todo => {
            return <ToDo 
                key={todo.id} 
                id={todo.id}
                task={todo.task} 
                removeToDo={this.remove}
                updateToDo={this.update}
                />;
        })

        return(
            <div>
                <h2>ToDoList Component</h2>
                <NewToDoForm createToDo={this.create}/>
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}

export default ToDoList; 
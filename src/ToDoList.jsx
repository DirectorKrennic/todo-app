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

    render(){

        const todos = this.state.todos.map(todo => {
            return <ToDo 
                key={todo.id} 
                id={todo.id}
                task={todo.task} 
                removeToDo={this.remove}
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
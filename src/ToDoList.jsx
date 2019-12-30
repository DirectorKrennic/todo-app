import React from 'react';
import ToDo from './ToDo';
import NewToDoForm from './NewToDoForm';

class ToDoList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            todos: [
                {task: 'Get better at React'},
                {task: 'Make dinner'}
            ]
        };
        //Create function below is not an arrow function so need to bind 'this'
        this.create = this.create.bind(this);
    }

    create(newTodo){
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    render(){

        const todos = this.state.todos.map(todo => {
            return <ToDo task={todo.task}/>;
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
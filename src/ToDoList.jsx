import React from 'react';
import ToDo from './ToDo';

class ToDoList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            todos: [
                {task: 'Get better at React'},
                {task: 'Make dinner'}
            ]
        }
    }

    render(){

        const todos = this.state.todos.map(todo => {
            return <ToDo task={todo.task}/>;
        })

        return(
            <div>
                <h2>ToDoList Component</h2>
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}

export default ToDoList; 
import React from 'react';

class ToDo extends React.Component {

    render(){
        return(
            <div>
                <button>Edit</button>
                <button>Delete</button>
                <li>{this.props.task}</li>
            </div>
        )
    }
}

export default ToDo; 
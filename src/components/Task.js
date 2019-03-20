import React from 'react';
import Subtasks from './Subtasks';

export default class Task extends React.Component{

    render() {
        return (
            <div>
                <input type="checkbox" />
                <p>Task ({this.props.id}): {this.props.name}</p>
                {
                    <Subtasks 
                        subtasks={this.props.subtasks}
                    />               
                }
                <button>DELETE</button>
            </div>            
        )
    }
}
import React from 'react';

import Tasks from './Tasks';

export default class Task extends React.Component{

    render() {
        return (
            <div>
                <p>Task ({this.props.id}): {this.props.name}</p>
                {
                    this.props.subtasks && this.props.subtasks.map((task) => (
                        <Task 
                            key={task.id}
                            id={task.id}
                            name={task.name}
                            subtasks={task.subtasks}
                        />
                    ))                    
                }
            </div>            
        )
    }
}
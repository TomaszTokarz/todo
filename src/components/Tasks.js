import React from 'react';

import Task from './Task';

export default class Tasks extends React.Component{

    render() {
        return (
            <div>
                <p>Your Tasks's:</p>
                {
                    this.props.tasks && this.props.tasks.map((task) => (
                        <Task 
                            key={task.id}
                            id={task.id}
                            name={task.name}
                            subtasks={task.subtasks}
                        />
                    ))
                }
                <p>----- END OF TASKS LIST -----</p>
            </div>
        )
    }
}
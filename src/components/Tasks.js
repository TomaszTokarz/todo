import React from 'react';

import Task from './Task';

export default class Tasks extends React.Component{

    render() {
        return (
            <div>
                <p>Your Tasks's:</p>
                {
                    this.props.tasks.map((task) => (
                        <Task 
                            key={task.tid}
                            id={task.tid}
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
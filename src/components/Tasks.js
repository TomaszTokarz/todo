import React from 'react';
import Task from './Task';
import styled from 'styled-components';

export default class Tasks extends React.Component{

    render() {
        return (
            <TasksList>
                {
                    this.props.tasks && this.props.tasks.map((task) => (
                        <Task 
                            key={task.id}
                            id={task.id}
                            name={task.name}
                            subtasks={task.subtasks}
                            done={task.done}
                            description={task.description}
                        />
                    ))
                }
            </TasksList>
        )
    }
}

const TasksList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 0;
`;
import React from 'react';
import Task from './Task';
import styled from 'styled-components';

export default class Tasks extends React.Component{
    render() {
        const { tasks, toggleDone } = this.props;

        return (
            <TasksList>
                {
                    tasks && tasks.map((task) => (
                        <Task 
                            key={task.id}
                            id={task.id}
                            name={task.name}
                            subtasks={task.subtasks}
                            done={task.done}
                            description={task.description}
                            toggleDone={toggleDone}
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
import React from 'react';
import Subtask from './Subtask';
import styled from 'styled-components';

export default class Subtasks extends React.Component{

    render() {
        return (
            <SubasksList>
                {
                    this.props.subtasks && this.props.subtasks.map((subtask) => (
                        <Subtask 
                            key={subtask.id}
                            id={subtask.id}
                            name={subtask.name}
                        />
                    ))
                }
            </SubasksList>
        )
    }
}

const SubasksList = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 25px;
`;
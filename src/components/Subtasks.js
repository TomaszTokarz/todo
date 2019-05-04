import React from 'react';
import styled from 'styled-components';

import Subtask from './Subtask';

export default props => {
    return (
        <SubasksList>
            {
                props.subtasks && props.subtasks.map(subtask => (
                    <Subtask 
                        key={subtask.id}
                        id={subtask.id}
                        name={subtask.name}
                    />
                ))
            }
        </SubasksList>
    )
};

const SubasksList = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 25px;
`;
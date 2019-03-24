import React from 'react';
import Subtasks from './Subtasks';
import styled from 'styled-components';
import {CheckboxChecked} from 'styled-icons/icomoon/CheckboxChecked';
import {CheckboxUnchecked} from 'styled-icons/icomoon/CheckboxUnchecked';
import {TrashAlt} from 'styled-icons/fa-solid/TrashAlt';
import Button from './Button';

export default class Task extends React.Component{  
    render() {
        return (
            <TaskContainer>
                {
                    this.props.done ? <Checked /> : <Unchecked /> 
                }

                <TaskItem>
                    <span>Task ({this.props.id}): {this.props.name}</span>
                    {
                        // <Subtasks 
                        //     subtasks={this.props.subtasks}
                        // />               
                    }
                    <Button><Delete /></Button>
                </TaskItem>
            </TaskContainer>
                
        )
    }
}

const TaskContainer = styled.div`
    display: flex;
    justify-content: space-between;
    color: #F6FFFF;
    line-height: 40px;
`;

const Checked = styled(CheckboxChecked)`
    height: 20px;
    color: #F6FFFF;
    margin-top: 10px;
`;

const Unchecked = styled(CheckboxUnchecked)`
    height: 20px;
    color: #F6FFFF;
    margin-top: 10px;
`;

const TaskItem = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    & span {
        margin-left: 10px
    }
`;

const Delete = styled(TrashAlt)`
    height: 20px;
    margin-top: 10px;
`;
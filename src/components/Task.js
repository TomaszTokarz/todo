import React from 'react';
import Subtasks from './Subtasks';
import styled from 'styled-components';
import {CheckboxChecked} from 'styled-icons/icomoon/CheckboxChecked';
import {CheckboxUnchecked} from 'styled-icons/icomoon/CheckboxUnchecked';
import {TrashAlt} from 'styled-icons/fa-solid/TrashAlt';
import Button from './Button';

export default class Task extends React.Component{

    toggleDone(task) {
    }

    submit(event) {
        event.preventDefault();
        console.log(event.target.elements)
    }

    render() {
        return (
            <Wrapper onSubmit={this.submit}>
                <TaskContainer>                                         
                    <Button onClick={() => this.toggleDone(this.props)}>
                        {
                            this.props.done ? <Checked /> : <Unchecked />
                        }                        
                    </Button>

                    <TaskItem>
                        <span>{this.props.name}</span>                    
                        <Button><Delete /></Button>
                    </TaskItem>                
                </TaskContainer>
                {
                    <Subtasks 
                        subtasks={this.props.subtasks}
                    />               
                }
                {
                    this.props.description ? <p>{this.props.description}</p> : ''
                }
                
            </Wrapper>
                
        )
    }
}

const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    color: #F6FFFF;
    line-height: 40px;
    border-bottom: 2px solid #F6FFFF;
    padding: 0 10px;
`;

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
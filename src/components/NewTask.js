import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { TrashAlt } from 'styled-icons/fa-solid/TrashAlt';
import { Save } from 'styled-icons/fa-solid/Save';

import { saveTask } from '../actions/task';

const mapState = (state) => ({
    
});

const actions = {
    saveTask
};

class NewTask extends React.Component{

    state = {
        name: ''
    }

    onTaskNameChange = (event) => {
        const name = event.target.value;
        this.setState(() => ({ name }));
    }

    saveNewTask = () => {

        const { saveTask, hideNewTaskForm } = this.props;
        const { name } = this.state;

        saveTask({
            id: name,
            name: name,
            done: false,
            removed: false,
            subtasks: [],
            description: '',
            date: new Date()
        });

        this.setState(() => ({ name: '' }));
        hideNewTaskForm();
    };
    
    render() {

        const { hideNewTaskForm } = this.props;
        const { name } = this.state;

        return (
            <Task>
                <Input 
                    type="text"
                    placeholder="What to do?" 
                    value={name}
                    onChange={this.onTaskNameChange}
                />
                <Buttons>
                    <Delete onClick={hideNewTaskForm} />
                    {
                        name
                            ? <SaveButton onClick={this.saveNewTask} />
                            : <SaveButtonDisabled />
                    }
                </Buttons>                
            </Task>
        )
    }
};

export default connect(mapState, actions)(NewTask);

const Task = styled.div`
    display: flex;
    padding: 10px 0;
    align-items: center;
    justify-content: space-between
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
`;

const Input = styled.input`
    height: 30px;
    font-size: 1.2em;
    width: 100%;
    padding: 0 10px;
    margin: 0 10px;
    background: #F6FFFF;
    border: 2px solid #225F5F;
    transition: all 0.2s ease-in-out;

    &:focus {
        border: 2px solid #F6FFFF;
        outline: none;
    }
`;

const Delete = styled(TrashAlt)`
    color: #F6FFFF;
    line-height: 50px;
    height: 20px;
    padding: 10px;
`;

const SaveButton = styled(Save)`
    color: #F6FFFF;
    height: 40px;
    padding: 10px;
`;

const SaveButtonDisabled = styled(SaveButton)`
    opacity: 0.1;
`;
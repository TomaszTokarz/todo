import React from 'react';
import styled from "styled-components";

import Header from './Header';
import Tasks from './Tasks';
import Mock from './../dev-utils/Mock';

const userData = new Mock;

export default class ToDoApp extends React.Component {
    state = {
        user: userData.getMockedData().user,
        tasks: userData.getMockedData().tasks
    };

    render() {
        return (
            <Wrapper>
                <Header 
                    userAvatar={this.state.user.avatar} 
                    userName={this.state.user.name} 
                />
                <Tasks
                    tasks={this.state.tasks}
                />
            </Wrapper>
        )        
    }
}

const Wrapper = styled.div`
    margin: 0;
    font-family: 'Margarine', cursive;
    display: flex;
    flex-direction: column;    
    background: #226666;
    height: 100vh;
`;
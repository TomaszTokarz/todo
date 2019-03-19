import React from 'react';

import Header from './Header';
import Todos from './Todos';
import Mock from './../dev-utils/Mock';

const userData = new Mock;

export default class ToDoApp extends React.Component {
    state = {
        user: userData.getMockedData().user,
        tasks: userData.getMockedData().tasks
    };

    render() {
        return (
            <div>
                <Header 
                    userAvatar={this.state.user.avatar} 
                    userName={this.state.user.name} 
                />
                <Todos />
            </div>
        )        
    }
}
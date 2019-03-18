import React from 'react';

import Header from './Header';
import Todos from './Todos';

export default class ToDoApp extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Todos />
            </div>
        )        
    }
}
import React from 'react';

import Todo from './Todo';

export default class Todos extends React.Component{

    render() {
        return (
            <div>
                <p>Your TODO's:</p>
                <Todo />
            </div>
        )
    }
}
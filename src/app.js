import React from 'react';
import ReactDOM from 'react-dom';

class TodoApp extends React.Component {
    render() {
        return (
            <div>
                Hello
            </div>
        )        
    }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<TodoApp />, appRoot);
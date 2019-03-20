import React from 'react';

export default class Subtask extends React.Component{

    render() {
        return (
            <div>
                <input type="checkbox" />
                <p>Task ({this.props.id}): {this.props.name}</p>
                <button>DELETE</button>
            </div>            
        )
    }
}
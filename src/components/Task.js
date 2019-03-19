import React from 'react';

export default class Task extends React.Component{

    render() {
        return (
            <div>
                <p>Task ({this.props.id}): {this.props.name}</p>                
            </div>
            
        )
    }
}
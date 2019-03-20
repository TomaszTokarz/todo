import React from 'react';
import Subtask from './Subtask';

export default class Subtasks extends React.Component{

    render() {
        return (
            <div>
                {
                    this.props.subtasks && this.props.subtasks.map((subtask) => (
                        <Subtask 
                            key={subtask.id}
                            id={subtask.id}
                            name={subtask.name}
                        />
                    ))
                }
                <p>----- END OF SUBTASKS LIST -----</p>
            </div>
        )
    }
}
import React from 'react';

export default class Header extends React.Component{
    render() {
        return (
            <div>
                <div>"avatar"</div>
                <div>User: {this.props.userName}</div>
                <button>Add</button>
                <button>Menu</button>
                <p>----- END OF HEADER -----</p>
            </div>
        )
    }
}
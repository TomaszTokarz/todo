import React from 'react';
import styled from 'styled-components';

export default class Button extends React.Component{

    render() {
        return <MainButton {...this.props} />
        // <MainButton onClick={this.props.onClick}>{this.props.children}</MainButton>
    }
}

const MainButton = styled.button`
    background: transparent;
    border: none;
    height: 30px;
    cursor: pointer;
    color: #F6FFFF;
`;
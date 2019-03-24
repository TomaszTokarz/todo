import React from 'react';
import styled from 'styled-components';
import {CheckboxChecked} from 'styled-icons/icomoon/CheckboxChecked';
import {CheckboxUnchecked} from 'styled-icons/icomoon/CheckboxUnchecked';
import {TrashAlt} from 'styled-icons/fa-solid/TrashAlt';
import Button from './Button';

export default class Subtask extends React.Component{

    render() {        
        return (
            <Wrapper>
                {
                    this.props.done ? <Checked /> : <Unchecked /> 
                }
                <SubtaskItem>
                    <span>{this.props.name}</span>
                    <Button><Delete /></Button>
                </SubtaskItem>                
            </Wrapper>            
        )
    }
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    color: #F6FFFF;
    line-height: 40px;
`;

const SubtaskItem = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    & span {
        margin-left: 10px
    }
`;

const Checked = styled(CheckboxChecked)`
    height: 20px;
    color: #F6FFFF;
    margin-top: 10px;
`;

const Unchecked = styled(CheckboxUnchecked)`
    height: 20px;
    color: #F6FFFF;
    margin-top: 10px;
`;

const SubaskItem = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    & span {
        margin-left: 10px
    }
`;

const Delete = styled(TrashAlt)`
    height: 20px;
    margin-top: 10px;
`;
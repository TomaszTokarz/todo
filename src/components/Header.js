import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import {AddCircle} from 'styled-icons/material/AddCircle';
import {Menu} from 'styled-icons/boxicons-regular/Menu';
import {UserCircle} from 'styled-icons/fa-solid/UserCircle';

export default class Header extends React.Component{
    render() {

        const { userName } = this.props;

        return (
            <Wrapper>
                <UserContainer>
                    <Avatar />
                    <div>{userName}</div>
                </UserContainer>
                <ButtonsContainer>
                    <Button><AddButton /></Button>
                    <Button><MenuButton /></Button>
                </ButtonsContainer>                
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    height: 40px;
    display: flex;
    justify-content: space-between;
    color: #F6FFFF;
    border-bottom: 2px solid #F6FFFF;
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const UserContainer = styled.div`
    display: flex;
    align-items: center;
`;

const AddButton = styled(AddCircle)`
    height: 30px;
`;

const MenuButton = styled(Menu)`
    height: 30px;
`;

const Avatar = styled(UserCircle)`
    height: 30px;
    margin: 0 10px;
`;

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Button from './Button';

import { AddCircle } from 'styled-icons/material/AddCircle';
import { Menu } from 'styled-icons/boxicons-regular/Menu';
import { UserCircle } from 'styled-icons/fa-solid/UserCircle';

const changeName = ({ newName = 'different user name'} = {}) => ({
    type: 'USER_NAME_EDIT',
    newName
});

const mapState = (state) => ({
    avatar: state.user.avatar,
    name: state.user.name
});

const actions = {
    changeName
};

class Header extends React.Component{
    render() {

        const { name, changeName } = this.props;

        return (
            <Wrapper>
                <UserContainer>
                    <Avatar />
                    <div>{name}</div>
                </UserContainer>
                <ButtonsContainer>
                    <Button onClick={changeName}><AddButton /></Button>
                    <Button><MenuButton /></Button>
                </ButtonsContainer>                
            </Wrapper>
        )
    }
}

export default connect(mapState, actions)(Header);

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

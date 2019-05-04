const initialState = {
    id: 1,
    name: 'Lazzy user',
    avatar: [1,2,3,4]
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_NAME_EDIT':
            return {...state, name: action.newName};

        default: 
            return state;
    }
};

export default userReducer;
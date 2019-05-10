const initialState = {
    id: 1,
    name: 'Lazzy user',
    avatar: [1,2,3,4]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'USER_LOG_IN':
            console.log(action.type);
            return state;

        case 'USER_LOG_OUT':
            console.log(action.type);
            return state;

        case 'USER_NAME_EDIT':
            console.log(action.type);
            return [...state,  action.newName];

        case 'USER_AVATAR_CREATE':
            console.log(action.type);
            return state;

        case 'USER_AVATAR_SAVE':
            console.log(action.type);
            return state;

        default: 
            return state;
    };
};
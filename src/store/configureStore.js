import { createStore, combineReducers } from 'redux';

import userReducer from '../reducers/userReducer';
import taskReducer from '../reducers/taskReducer';

export default () => {
    const store = createStore(
        combineReducers({
            user: userReducer,
            tasks: taskReducer
        })
    );

    return store;
};

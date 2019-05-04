import React from 'react';
import ReactDOM from 'react-dom';

import ToDoApp from './components/ToDoApp';

// REDUX

// const demoState = {
//     expenses: [{
//         id: 'pies',
//         description: 'dupa dupa',
//         note: 'nanaananapies',
//         amount: 104392,
//         createdAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'date',
//         startDate: undefined,
//         endDate: undefined
//     }
// };

// Expenses reducer

// const expensesReducerDefaultState = [];

// const expensesReducer = (state = expensesReducerDefaultState, action) => {
//     switch (action.type) {
//         case 'ADD_EXPENSE':
//             state.concat(action.expense)

//         default: 
//             return state;
//     }
// };

// const filterReducerDefaultState = {
//     text: '',
//     sortBy: 'date',
//     startDate: undefined,
//     endDate: undefined
// };

// const filterReducer = (state = filterReducerDefaultState, action) => {
//     switch (action.type) {
//         default: 
//         return state;
//     }
// };

// // Filters reducer



// Action Generators
// const incrementCount = ({ incrementBy = 1 } = {}) => ({
//     type: 'INCREMENT',
//     incrementBy
// });

// const decrementCount = ({ decrementBy = 1 } = {}) => ({
//     type: 'DECREMENT',
//     decrementBy
// });

// Reducers

// const countReducer = (state = { count: 0 }, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return {
//                 count: state.count + action.incrementBy
//             }
//         case 'DECREMENT':
//             return {
//                 count: state.count - action.decrementBy
//             }
//         case 'RESET':
//             return {
//                 count: 0
//             }
//         default:
//         return state;
//     }
// }

// const store = createStore(countReducer);

// store.subscribe(() => {
//     console.log(store.getState());
// });

// Actions
// store.dispatch(incrementCount());

// store.dispatch({
//     type: 'RESET'
// });

// store.dispatch(decrementCount({ decrementBy: 13}));

// REDUX

ReactDOM.render(<ToDoApp />, document.getElementById('app'));
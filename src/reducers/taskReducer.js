const initialState = [{
    id: 1,
    name: 'Do something',
    done: false,
    removed: false,
    subtasks: [{
        id: 1,
        name: 'something 1',
        done: false,
        removed: false
    }, {
        id: 2,
        name: 'something 2',
        done: true,
        removed: false
    }, {
        id: 3,
        name: 'something 3',
        done: false,
        removed: true
    }],
    description: 'Do something or even more "somethings"',
    date: '18.03.2019'
}, {
    id: 2,
    name: 'Do some simple stuff',
    done: true,
    removed: false,
    subtasks: [],
    description: '',
    date: '18.03.2019'
}]

export default (state = initialState, action) => {
    switch (action.type) {
        case 'TASK_ADD':
            return [...state, action.task];

        case 'TASK_EDIT':
            console.log(action.type);
            return state;

        case 'TASK_DELETE':
            console.log(action.type);
            return state;

        case 'TASK_CLOSE':
            console.log(action.type);
            return state;

        default: 
            return state;
    };
};
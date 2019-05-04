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
    data: '18.03.2019'
}, {
    id: 2,
    name: 'Do some simple stuff',
    done: true,
    removed: false,
    subtasks: [],
    description: '',
    data: '18.03.2019'
}]

const taskReducer = (state = initialState, action) => {
    return state;
};

export default taskReducer;
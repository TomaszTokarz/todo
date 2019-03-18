import React from 'react';
import ReactDOM from 'react-dom';

import ToDoApp from './components/ToDoApp';
import Mock from './dev-utils/Mock';

const userData = new Mock;
console.log(userData.getMockedData());

ReactDOM.render(<ToDoApp />, document.getElementById('app'));
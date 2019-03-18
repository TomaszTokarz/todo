
class Mock {

    getMockedData = () => {                
        return {
            user: {
                id: 1,
                name: 'Lazzy user',
                avatar: [1,2,3,4]
            },
            tasks: [{
                tid: 1,
                name: 'Do something',
                done: false,
                removed: false,
                subtasks: [{
                    sid: 1,
                    name: 'something 1',
                    done: false,
                    removed: false
                }, {
                    sid: 2,
                    name: 'something 2',
                    done: true,
                    removed: false
                }, {
                    sid: 3,
                    name: 'something 3',
                    done: false,
                    removed: true
                }],
                description: 'Do something or even more "somethings" ;)',
                data: '18.03.2019'
            }, {
                tid: 2,
                name: 'Do some simple stuff',
                done: false,
                removed: false,
                subtasks: [],
                description: '',
                data: '18.03.2019'
            }]
        }        
    }
}

export default Mock;
import { createStore } from 'redux';
//const Redux = require('redux');

const reducer = function (state, action) {
    if (action.type === 'changeName') {
        // let newState = JSON.parse(JSON.stringify(state));
        return Object.assign({}, state, {name: action.name})
    } else {
        return state;
    }
};

const store = createStore(reducer, {name: 'csy'});
var {subscribe, dispatch, getState} = store;

subscribe(() => {
    console.log(store.getState());
});

/*
store.subscribe(() => {
    console.log(store.getState());
});
*/

/*
function callAction() {
    var promiseAction = new Promise({
        function(resolve, reject){
            setTimeout(function name(params) {
                let action = {
                    type: 'test',
                    data: {name: 'csy1'}
                };
                resolve(action);
            });
        }
    });
    promiseAction.then(function (action) {
        store.dispatch(action);
    })
}*/

const action = {
    type: 'changeName', name: 'chenshiying'
};
store.dispatch(action);
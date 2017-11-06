'use strict';

import {createStore,bindActionCreators} from 'redux';

function reducer(state, action) {
    if (action.type === 'changeName') {
        return Object.assign({}, state,{name:action.name});
    } else {
        return state;
    }
}

const store = createStore(reducer);

store.subscribe(()=>{
    console.log(store.getState());
});


function a(name) {
    return {
        type: "a",
        name
    }
}

function b(name) {
    return {
        type : "b",
        name
    }
}

var actions = bindActionCreators({a,b},store.dispatch);

actions.a("csy");

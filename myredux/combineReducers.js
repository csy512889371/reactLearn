"user strict";

import {createStore, combineReducers} from 'redux';


/*const reducers = {a: function (state, action) {
},b: function (state, action) {
}};*/

function aRducer(state,action) {
    if(typeof state === 'undefined') return [];
    switch (action.type) {
        case 'a':
            return state.concat([action.data]);
        default:
            return state;
    }
}

function bReducer(state,action) {
    if(typeof state === 'undefined') return [];

    switch (action.type) {
        case 'b':
            return state.concat([action.data]);
        default:
            return state;
    }
}

const reducer = combineReducers({aRducer, bReducer});

const store = createStore(reducer);

store.subscribe(function listener() {
    console.log(store.getState());

});

let action = {
    type: 'a',
    data: 'csy'
};

store.dispatch(action);
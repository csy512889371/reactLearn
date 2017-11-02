'use strict';

import {createStore} from 'redux';
import store from "./redux/store";

/**
 *  demo 1
 * @param action
 * @param dispatch
 * @returns {Function}
 */

/*
const store = createStore(function reducer(state,action) {
    if (typeof state === "undefined") return {};
    switch (action.type) {
        case "changeName":
            return Object.assign({},state,{name:action.name});
        default:
            return {};
    }
});

/!*const action = {
    type: "changeName",
    name: 'csy'
};
store.dispatch(action);*!/


function actionCreater(name) {
    return {
        name,
        type:'changeName'
    }
}

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(actionCreater("csy"));
store.dispatch(actionCreater("chenshiying"));
*/


/**
 *  demo 2
 * @param action
 * @param dispatch
 * @returns {Function}
 */
/*
function createAction(action,dispatch) {
    return function (opt) {
        action = Object.assign({},action, opt, {type: action.type});
        dispatch(action);
    }
}

var action = createAction({type:"changeName", name :'csy'}, store.dispatch);
action();
action({name:"lishi"});
*/

/**
 *  demo 3
 * @param action
 * @param dispatch
 * @returns {Function}
 */

/*
function createActions(actions, dispatch) {

    function createAction(action,dispatch) {
        return function (opt) {
            action = Object.assign({},action, opt, {type: action.type});
            dispatch(action);
        }
    }

    if(typeof actions === 'function') {
        return createAction(actions, dispatch);
    } else {
        let result = {};
        for (let k in actions) {
            result[k] = createAction(actions[k], dispatch);
        }
        return result;
    }
}

let a = {type: "a"};
let b = {type: "b"};
let c = {type: "c"};

let actions = createActions({a,b,c}, store.dispatch);
actions.a();
actions.b();
actions.c();*/

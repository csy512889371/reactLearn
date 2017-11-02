'use strict';

/**
 * myredux test
 * @type {{x: number}}
 */
import {userMiddleware, createStore} from './myredux/index';
/*
const userMiddleware = require('./myredux/index').userMiddleware;
const  createStore = require('./myredux/index').createStore;
*/

const logger = store => next => action =>{
    console.log('Action begin', action.type);
    next.call(store, action);
    console.log('action end', action.type)
};

const logger2 = function (store) {
    return function (next) {
        return function (action) {
            console.log('Action begin', action.type);
            next.call(store, action);
            console.log('action end', action.type)
        }
    }
}

const store = createStore(function (state, action) {
    if (action.type == 'changeName') {
        return{
            name: action.name
        }
    } else {
        return state
    }
},{name:'csy'});

store.listen(() =>{
    console.log(store.state);
});

userMiddleware(store,[logger2]);

store.dispatch({
    type :'changeName',
    name: 'chenshiying'
});
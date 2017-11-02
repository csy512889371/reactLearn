/**
 * 例子一
 * @param state
 * @returns {{num: number}}
 */
/*
function pureFunction(state) {
    let num = state.num;
    return {
        num
    }
}

const newState = pureFunction({num:10});

console.log(newState);*/

/**
 * 例子二
 * @param state
 * @returns {{num: number}}
 */
/*
let state = {
    aaa:{name:'leo'},
    bbb:{group:'javascript'}
};

function update(updaters, state) {
    let newState = {};
    const keys = Object.keys(updaters);
    keys.forEach(key => {
        let updater = updaters[key];
        let value = state[key];
        let newSubState = updater(value);
        newState[key] = newSubState;
    });

   let result = Object.assign({}, state, newState);
   console.log(result)
}

function aaaUpdater(subState) {
    return {name:'liangzeng'}
}

function bbbUpdater(subState) {
    return {group:'node.js'}
}

update({aaa:aaaUpdater, bbb:bbbUpdater}, state);
*/


/**
 * 例子三
 * @param state
 * @returns {{num: number}}
 */

/*
'use strict';

var EventEmitter = require('events').EventEmitter;

class Store {
    constructor(state) {
        this._state = state || {};
        this._updates = {};
        this._emitter = new EventEmitter;
    }

    get state() {
        return JSON.parse(JSON.stringify(this._state));
    }

    setUpdates(fns) {
        this._updates = fns;

    }

    dispatch(action) {
        if (typeof this._updates === 'function') {
            this._state = this._updates(this.state,action);
        } else {
            let newState = {};
            const keys = Object.keys(this._updates);
            keys.forEach(key => {
                let updater = this._updates[key];
                let value = this._state[key];
                let newSubState = updater(value,action);
                newState[key] = newSubState;
            });

            this._state = Object.assign({}, this._state, newState);
        }

        this._emitter.emit('change');
    }

    listen(listener) {
        this._emitter.on('change',listener);
    }
}


const sto = new Store({name: 'csy', num: 5});

function numUpdater(oldState, action){
    console.log(action);
    let newStatus = {};
    switch (action.type) {
        case '+':
            newStatus.num = 1 + oldState.num;
            return newStatus;
        case '-':
            newStatus.num = oldState.num - 1;
            return oldState;
        default:
            return oldState;
    }
}

function nameUpdater(oldName, action) {

    console.log(action);

    if (action.type === 'changeName') {
        return action.name;
    } else {
        return oldName;
    }
    return action.name;
}

sto.setUpdates({
    num:numUpdater,
    name:nameUpdater
});

sto.listen(() => {
    console.log(sto.state);
});

const action = {
    type :'+'
};

const action2 = {
    type: '-'
};

const action3 = {
    type: 'changeName',
    name: 'zeng liang'
};

sto.dispatch(action3);
*/

/**
 * 例子四
 * @param state
 * @returns {{num: number}}
 */

'use strict';

var EventEmitter = require('events').EventEmitter;

class Store {
    constructor(state) {
        this._state = state || {};
        this._updates = {};
        this._emitter = new EventEmitter;
    }

    get state() {
        return JSON.parse(JSON.stringify(this._state));
    }

    setUpdates(fns) {
        this._updates = fns;

    }

    dispatch(action) {
        console.log('begin store inner dispatch');
        if (typeof this._updates === 'function') {
            this._state = this._updates(this.state,action);
        } else {
            let newState = {};
            const keys = Object.keys(this._updates);
            keys.forEach(key => {
                let updater = this._updates[key];
                let value = this._state[key];
                let newSubState = updater(value,action);
                newState[key] = newSubState;
            });

            this._state = Object.assign({}, this._state, newState);
        }

        this._emitter.emit('change');
    }

    listen(listener) {
        this._emitter.on('change',listener);
    }
}

module.exports = Store;


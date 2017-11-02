
const  Store = require('./Store');

createStore = function createStore(updaters, defaultState) {
    const sto = new Store(defaultState);
    sto.setUpdates(updaters);
    return sto;
};

exports.userMiddleware = function userMiddleware(store, middles) {
    middles.reverse();
    middles.forEach(middles => {
        let next = store.dispatch;
        store.dispatch =  middles(store)(next.bind(store));
    });
    return store;
};

function  logger(store) {
    let next = store.dispatch;
    store.dispatch = function (action) {
        console.log('Action begin', action.type);
        next.call(store, action);
        console.log('action end', action.type)
    };

    return store;
}


const logger2 = store => next => action =>{
    store.dispatch = function (action) {
        console.log('Action begin', action.type);
        next.call(store, action);
        console.log('action end', action.type)
    };
};




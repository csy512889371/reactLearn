const redux = require("redux");
const promise = require("redux-promise");


function reducer(state, action) {
    if (typeof state === "undefined") {
        return {name: 1};
    }
    switch (action.type) {
        case "changeName" :
            return {name: action.payload.name};
        default :
            return state;
    }
}

const store = redux.createStore(reducer, redux.applyMiddleware(promise));

function action(name) {
    return {
        type: "changeName",
        payload:{name}
    }
}

let asyncAction = function (name) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(action("csss"));
        }, 1000)
    })
};

store.dispatch(asyncAction("ccccc"));

store.subscribe(() => {
    console.log(store.getState());
});



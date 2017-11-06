const Redux = require("redux");
const applyMiddleware = Redux.applyMiddleware;

const logger = store => nextDispatch => action => {
    console.log("start" + action.type);
    let result = nextDispatch(action);
    console.log("end" + action.type);
    return result;
};

//  使用 thunk 异步加载数据
const thunk = store => nextDispatch => action => {
    if (typeof action === "function") {
        action(nextDispatch);
    } else {
        nextDispatch(action);
    }
};

//使用 promise 异步加载数据
const promise = store => nextDispatch => action => {
    if (typeof action === Promise) {
        action.then(function (action) {
            nextDispatch(action);
        });
    } else {
        nextDispatch(action);
    }
};

//generator action

function *generatorAction() {
    let name = yield new Promise(function (resolve, reject) {
        setTimeout(function (params) {
            resolve("csy,.");
        }, 3000);
    });

    return {
        name,
        type: "cccsssyyy"
    }
}

const generator = store => nextDispatch => action => {
    if (typeof action === "function" && action.constructor.name === "GeneratorFunction") {
        let g = action();
        let v = g.next();
        function run(v) {
            if (v.done) {
                nextDispatch(action);
            } else {
                if (v.value && v.value instanceof Promise) {
                    v.value.then(function (name) {
                        g.next(name);
                    })
                }else {
                    nextDispatch(v.value);
                }
            }
        }
        run(v);
    }
};

const createStore = applyMiddleware(promise,logger)(Redux.createStore);

function thunkAction(name) {
    return dispatch => {
        setTimeout(function () {
            dispatch({
                type:"changName",
                name
            });
        }, 3000);
    }
}

function promiseAction(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function (params) {
            resolve({
                type:"changeName",
                name
            });
        },3000);
    });
}

function reducer(state, action) {
    if (typeof state === "undefined") return {name: ""};
    switch (action.type) {
        case "changeName":
            return {name: action.name};
        default:
            return state;
    }
}
const store = Redux.createStore(reducer,{name: "csy"});
store.subscribe(() =>
    console.log(store.getState())
);
//store.dispatch(thunkAction("cccsssyyy"));
store.dispatch(promiseAction("cccsssyyy"));
console.log("first name");




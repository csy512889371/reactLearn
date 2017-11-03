const Redux = require("redux");
const applyMiddleware = Redux.applyMiddleware;

const logger = store => nextDispatch => action => {
    console.log("start" + action.type);
    let result = nextDispatch(action);
    console.log("end" + action.type);
    return result;
};


const logger2 = function (store) {
    return function (nextDispatch) {
        return function (action) {
            console.log("start2" + action.type);
            let result = nextDispatch(action);
            console.log("end2" + action.type);
            return result;
        }
    }
};

const createStore = applyMiddleware(logger,logger2)(Redux.createStore);

const  reducer = function (state, action) {
    if (typeof state === "undefined") return {name: ""};
    switch (action.type) {
        case "changeName":
            return {name: action.name};
        default:
            return state;
    }
};

const store = createStore(reducer,{name: "csy"});
store.subscribe(() => console.log(store.getState()));
store.dispatch({type:"changeName",name:"csy!!"});
const  redux = require("redux");
const thunk = require("redux-thunk").default;


//let createStore = redux.applyMiddleware(thunk)(redux.createStore());

function reducer(state,action) {
    if (typeof state === "undefined") {
        return {name: 1};
    }
    switch (action.type) {
        case "changeName" : return {name : action.name};
        default :return state;
    }
}

const  store = redux.createStore(reducer,redux.applyMiddleware(thunk.withExtraArgument({default:"javascript"})));

function action(name) {
    return {
        type: "changeName",
        name
    }
}

let asyncAction = function (name) {

    /*    let action = {
            type: "changeName",
            name
        };
        return (dispatch,getState) => {
            if (getState.name === "1") return;
            setTimeout(()=>{
                dispatch(action);
            }, 3000);
        }*/
    return dispatch => {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                dispatch(action("action1"));
                resolve();
            }, 1000)
        }).then(function (params) {
            return new Promise((resolve, reject) => {
                setTimeout(()=>{
                    resolve(dispatch(action("action2")));
                }, 1000)
            })
        }).then(function (params) {
            dispatch(action("action3"));
        })
    }

};

store.dispatch(asyncAction("ccccc"));

store.subscribe(()=>{
    console.log(store.getState());
});



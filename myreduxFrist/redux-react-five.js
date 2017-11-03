'user strict';

const React = require("react");
const ReactDOM = require("react-dom");
const Redux = require("redux");
const {connect, Provider} = require("react-redux");

function reducer(state, action) {
    if (typeof state === 'undefined') return {name: "", num: 0};
    switch (action.type) {
        case "changeName":
            return Object.assign({}, state, action.payload);
        case "access":
            return Object.assign({}, state, {num: 1 + state.num});
        default:
            return state;
    }
}

const store = Redux.createStore(reducer);

let actions = {
    changeName(name) {
        return {
            type: "changeName",
            payload: {name}
        }
    },
    access() {
        return {
            type: "access"
        }
    }
};

let OPT = React.createClass({
    render() {
        return <div>
            <input onChange={event => this.props.changeName(event.target.value)}/>
            <button onClick={event => this.props.access()}>access</button>
        </div>
    }
});

OPT = connect(null, actions)(OPT);

let UI = React.createClass({
    render() {
        return <div>
            <p>{this.props.name}</p>
            <p>{this.props.num}</p>
            <OPT/>
        </div>
    }
});


function getState(state, props) {
    return store.getState();
}

/**
 * 建议和顶端 绑定
 * 1 个store 绑定多个UI
 */
UI = connect(getState)(UI);

function render(name){

    ReactDOM.render(<Provider store={store}><UI name={name}/></Provider>, document.body);
    console.log("render");
}

render("ccccc");

setTimeout(function () {
    render("ccccssssaa");
}, 3000);
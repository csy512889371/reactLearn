'use strict';

const React = require("react");

const Editor= require("./myreduxSec/app/components/Editor");
const List = require("./myreduxSec/app/components/List");
const Redux = require("redux");
const {connect, Provider} = require("react-redux");
const ReactDOM = require("react-dom");

function reducer(state, action) {
    if (typeof state === "undefined") return {list:[]}
    switch (action.type) {
        case "add":
            let list = state.list.concat(action.value);
            return Object.assign({},state,{list});
        default:
            return state;
    }
}

const store = Redux.createStore(reducer,{list:[]});

const actions = {
    submit(value) {
        return {
            type:"add",
            value
        }
    }
};

let App = React.createClass({
    render() {
        return <div>
            <List list={this.props.list}/>
            <Editor submit={this.props.submit}/>
        </div>
    }
});

App = connect(state => state, actions)(App);

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>,document.body);
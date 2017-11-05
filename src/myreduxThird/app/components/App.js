'use strict';

import React from 'react';

import List from './myreduxThird/app/components/List';
import Editor from './myreduxThird/app/components/Editor';
import {navbar} from './myreduxThird/app/components/Navbar';
import Login from './myreduxThird/app/components/Login';

import {createStore, applyMiddleware} from 'redux';
import {connect, Provider} from "react-redux";
import ReactDOM from "react-dom";

import {Grid, Row, Col} from 'react-bootstrap';

import thunk from 'redux-thunk'


function reducer(state, action) {
    if (typeof state === "undefined") return {list: []}
    switch (action.type) {
        case "add":
            let list = state.list.concat(action.payload);
            return Object.assign({}, state, {list});
        case "logined" :
            if (action.error) {
                return Object.assign({}, state, {loginError: action.payload, logined: false});
            } else {
                return Object.assign({}, state, {loginError: null, logined: true});
            }
        case "init" :
            return action.payload;
        case "logout" :
            return Object.assign({}, state, {loginError: null, logined: false});
        default:
            return state;
    }
}

const store = createStore(reducer, {list: []}, applyMiddleware(thunk));

const actions = {
    init() {
        return function (dispatch) {
            fetch("data.json").then(function (res) {
                res.json().then(data => {
                    dispatch({
                        type: "init",
                        payload: data
                    });
                });
            });
        }
    },
    submit(value) {
        return {
            type: "add",
            payload: value
        }
    },
    login(info) {
        console.log(info);
        if (info.loginname === "csy" && info.password === "123456") {
            return {
                type: "logined",
                payload: info
            }
        } else {
            return {
                type: "logined",
                error: true,
                payload: new Error("登录失败")
            }
        }
    }, logout() {
        return {
            type: "logout"
        }
    }
};

let App = React.createClass({
    componentDidMount() {
        this.props.init();
    },
    render() {
        return <div>
            {navbar}
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        <List list={this.props.list}/>
                    </Col>
                    <Col xs={6} md={4}>
                        {this.props.logined ? <div>登录成功
                            <button onClick={this.props.logout}>退出登录</button>
                        </div> : <Login loginError={this.props.loginError} login={this.props.login}/>}
                    </Col>
                </Row>

            </Grid>

            <Editor submit={this.props.submit}/>
        </div>
    }
});

App = connect(state => state, actions)(App);

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById("root"));
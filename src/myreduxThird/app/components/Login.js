'use strict';

import React from "react";
import ReactDOM from "react-dom";
import {FormGroup, ControlLabel, FormControl, Button} from "react-bootstrap";

class Login extends React.Component {
    dologin() {
        const loginnameDOM = ReactDOM.findDOMNode(this.refs.loginname);
        const passwordDOM = ReactDOM.findDOMNode(this.refs.password);
        this.props.login({loginname: loginnameDOM.value, password: passwordDOM.value});

        loginnameDOM.value = "";
        passwordDOM.value = "";
    }

    render() {
        return <div>
            <form>
                <FormGroup controlId="formHorizontalEmail" validationState={this.props.loginError ? "error" : null}>
                    <ControlLabel>用户名：{this.props.loginError ? this.props.loginError.message : ""}</ControlLabel>
                    <FormControl type="text" ref="loginname"/>
                </FormGroup>
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>密码：</ControlLabel>
                    <FormControl type="password" ref="password"/>
                </FormGroup>
                <div>
                    <Button onClick={this.dologin.bind(this)}>
                        登录
                    </Button>
                </div>
            </form>
        </div>
    }
}

export default Login;


'use strict';

import React from 'react';
import {FormControl, ControlLabel, Button, FormGroup, Col} from "react-bootstrap";
import ReactDOM from "react-dom";

class Editor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: ""
        }
    }

    submit() {
        console.log(this.refs);
        let titleDOM = ReactDOM.findDOMNode(this.refs.title);
        let bodyDOM = ReactDOM.findDOMNode(this.refs.body);

        this.props.submit({title: titleDOM.value, body: bodyDOM.value});//action
        bodyDOM.value = "";
        titleDOM.value = "";
    }

    render() {
        return <form>
            <FormGroup controlId="formHorizontalEmail">
                <ControlLabel>标题</ControlLabel>
                <FormControl type="text" ref="title"/>
            </FormGroup>
            <FormGroup controlId="formControlsTextarea">
                <ControlLabel>内容</ControlLabel>
                <FormControl componentClass="textarea" ref="body"/>
            </FormGroup>
            <div>
                <Button onClick={this.submit.bind(this)}>
                    Submit
                </Button>
            </div>
        </form>
    }
}

export default Editor;
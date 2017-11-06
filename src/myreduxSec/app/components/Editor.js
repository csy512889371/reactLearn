'use strict';

const React = require("react");
const {FormControl, ControlLabel, Button, FormGroup,Col} = require("react-bootstrap");
const ReactDOM = require("react-dom");

const Editor = React.createClass({

    getInitialState() {
        return {
            title: "",
            body: ""
        }
    },

    submit() {
        let titleDOM = ReactDOM.findDOMNode(this.refs.title);
        let bodyDOM = ReactDOM.findDOMNode(this.refs.body);

        this.props.submit({title: titleDOM.value, body: bodyDOM.value});//action
        bodyDOM.value = "";
        titleDOM.value = "";
    },
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
                <Button onClick={this.submit}>
                    Submit
                </Button>
            </div>
        </form>
    }
});

module.exports = Editor;
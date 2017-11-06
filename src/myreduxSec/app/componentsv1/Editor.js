'use strict';

const React = require("react");
const {FormControl,ControlLabel,Button,FormGroup} = require("react-bootstrap");

const Editor = React.createClass({

    getInitialState() {
        return {
            text: "",
        }
    },
    handleChange(e) {
        this.state.text = e.target.value;
    },
    submit() {
        this.props.submit(this.state.text);//action
    },
    render() {
        return <form>
            <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Textarea</ControlLabel>
                <FormControl onChange={this.handleChange} componentClass="textarea" placeholder="textarea" />
            </FormGroup>
            <div>
                <Button onClick = {this.submit}>
                    Submit
                </Button>
            </div>
        </form>
    }
});

module.exports = Editor;
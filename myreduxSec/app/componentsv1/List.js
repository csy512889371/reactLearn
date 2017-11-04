'use strict';

const React = require("react");
const {ListGroup,ListGroupItem} = require("react-bootstrap");

const List = React.createClass({

    render() {
        let List = this.props.list.map(item =>{
            return <ListGroupItem>{item}</ListGroupItem>
        });

        return <ListGroup>
            {List}
        </ListGroup>
    }
});


module.exports = List;


'use strict';

const React = require("react");
const {PanelGroup,Panel} = require("react-bootstrap");

const List = React.createClass({

    render() {
        let List = this.props.list.map((item, index) =>{
            console.log(index);
            return <Panel key={index} header={item.title} eventKey="{index}">{item.body}</Panel>
        });

        return <PanelGroup defaultActiveKey="1" accordion>
            {List}
        </PanelGroup>
    }
});

module.exports = List;


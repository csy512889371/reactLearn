'use strict';

import React from 'react';
import {PanelGroup,Panel} from 'react-bootstrap';

class List extends React.Component {
    render() {
        let List = this.props.list.map((item, index) =>{
            console.log(index);
            return <Panel key={index} header={item.title} eventKey="{index}">{item.body}</Panel>
        });

        return <PanelGroup defaultActiveKey="1" accordion>
            {List}
        </PanelGroup>
    }
}

export default List;


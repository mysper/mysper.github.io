import React, { Component } from 'react';

import SideList from './SideList';

class Private extends Component {
    render() {
        return (
            <div style={{ position: 'absolute', top: 0, bottom: 0 }}>
                <SideList></SideList>
            </div>
        );
    }
}

export default Private;
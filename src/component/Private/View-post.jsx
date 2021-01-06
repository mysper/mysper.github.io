import React, { Component } from 'react';

class Viewpost extends Component {
    state = {}
    render() {
        return (
            <h1>{this.props.post._id}</h1>
        );
    }
}

export default Viewpost;
import React, { Component } from 'react';

class PostContent extends Component {
    constructor(props) {
        super(props);
        this.state = { id: props.match.params.id };
    }
    render() {
        return (
            <h1>{this.state.id}</h1>
        );
    }
}

export default PostContent;
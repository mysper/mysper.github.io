import React, { Component } from 'react';
import axios from 'axios';
class Post extends Component {
    constructor() {
        super();
        this.state = { response: null };
        axios.get('https://mysper-gh-pages.herokuapp.com/post/get/list').then(
            response => {
                this.setState({ response: response.data });
                console.log(this.state);
            }
        );
    }
    render() {
        return (
            <div style={{ position: 'absolute', top: 0, bottom: 0 }}>
                <h1>Post Page</h1>
                <h2>Coming Soon</h2>
                <h2>building api</h2>
                {(this.state.response) ?
                    this.state.response.map((post, index) =>
                        <p style={{ fontSize: '24px' }}>{post.title}<sub style={{ fontSize: '12px' }}>{post.data}</sub></p >
                    ) : 'null'
                }
            </div>
        );
    }
}
export default Post;
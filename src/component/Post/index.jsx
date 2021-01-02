import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { response: null };
        axios.get('https://mysper-gh-pages.herokuapp.com/post/get/list').then(
            response => {
                this.setState({ response: response.data });
                props.dispatch({
                    type: 'update_post',
                    payload: [...response.data]
                });
                console.log(this.state);
            }
        );
        console.log(props);
    }

    render() {
        return (
            <div style={{ position: 'absolute', top: 0, bottom: 0 }}>
                <h1>Post Page</h1>
                <h2>Coming Soon</h2>
                <h2>building api</h2>
                {(this.props.post.data) ?
                    Object.keys(this.props.post.data).map((key) =>
                        <p key={key} style={{ fontSize: '24px' }}>{this.props.post.data[key].title}<sub style={{ fontSize: '12px' }}>{this.props.post.data[key].data}</sub></p>
                    ) : 'null'
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    post: state.post,
});

export default connect(mapStateToProps)(Post);
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import '../../style/Post.scss';

import PostsList from './PostsList';
import AnimateSwitch from '../AnimateSwitch';
import { Route } from 'react-router-dom';
import PostContent from './PostContent';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { response: null };
        axios.get('https://mysper-gh-pages.herokuapp.com/post/list').then(
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
            <div className="Posts">
                <AnimateSwitch>
                    <Route path={`${this.props.match.url}`} exact>
                        <h1>Post</h1>
                        <PostsList></PostsList>
                    </Route>
                    <Route path={`${this.props.match.url}/:id`} component={PostContent} />
                </AnimateSwitch>
            </div >
        );
    }
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(Post);
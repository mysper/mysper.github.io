import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import '../../style/SideList.scss';
import Viewpost from './View-post';
import New from './new';
class SideList extends Component {
    constructor(props) {
        super(props);
        this.state = { view: false, viewPage: null };
        axios.get('https://mysper-gh-pages.herokuapp.com/post/list').then(
            response => {
                props.dispatch({
                    type: 'update_post',
                    payload: [...response.data]
                });
                console.log(props);
            }
        );
    }
    listRender = (list) => {
        return Object.keys(list).map(
            index => {
                return (
                    <div key={index} className="sideitem">
                        <span className="title" onClick={e => this.clickHandle(e, list[index])}>{list[index].title}</span>
                        <div className="del" onClick={e => this.delpost(list[index]._id)}></div>
                    </div>
                );
            }
        );
    }
    delpost = (id) => {
        const password = prompt("plz enter the password");
        axios.delete(
            `https://mysper-gh-pages.herokuapp.com/post/post/${id}`,
            { password },
            {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                }
            }
        ).then(
            res => {
                if (res.status === 200) {
                    alert('the post is deleted');
                    this.props.dispatch({ type: "delete_post", payload: this.props.list.filter(item => item._id !== id) });
                }
                else alert('the post is deleted failed');

            }
        )
    }
    clickHandle = (e, post) => {
        console.log(e);
        console.log(post);
        this.setState({ view: true, post: post });
    }
    newPost = () => {
        console.log('new post');
        this.setState({ view: false });
    }
    handlePost = () => {
        const password = prompt("plz enter the password");
        const body = {
            title: this.props.newPost.title,
            content: this.props.newPost.content,
            type: "text",
            password
        };
        console.log(body);
        axios.post(
            "https://mysper-gh-pages.herokuapp.com/post/new",
            body,
            {
                headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
            }
        ).then(
            response => {
                if (response.status === 200) {
                    alert('the post is sent');
                    this.props.dispatch({ type: "update_post", payload: [response.data, ...this.props.list] });
                } else alert('the post is snet failed');
            }
        )
    }
    handleLink = () => {
        const password = prompt("plz enter the password");
        const body = {
            title: this.props.newPost.title,
            content: this.props.newPost.content,
            type: "link",
            password
        };
        console.log(body);
        axios.post(
            "https://mysper-gh-pages.herokuapp.com/post/new",
            body,
            {
                headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
            }
        ).then(
            response => {
                if (response.status === 200) {
                    alert('the post is sent');
                    this.props.dispatch({ type: "update_post", payload: [response.data, ...this.props.list] });
                } else alert('the post is snet failed');
            }
        )
    }
    render() {
        const { list } = this.props;
        return (
            <Fragment>
                <div id="sideList">
                    {
                        (list) ? this.listRender(list) : <div className="loadingBlock"><div className="loading"></div></div>
                    }
                </div>
                <div id="View">
                    <div className="top">
                        <button className="newPostButton" onClick={this.newPost}>New</button>
                        <button onClick={this.handlePost}>post</button>
                        <button onClick={this.handleLink}>link</button>
                    </div>
                    <div className="bottom">
                        {
                            (this.state.view) ? <Viewpost post={this.state.post}></Viewpost> : <New></New>
                        }
                    </div>
                </div>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        list: state.post.list,
        newPost: state.post.newPost
    }
}

export default connect(mapStateToProps)(SideList);
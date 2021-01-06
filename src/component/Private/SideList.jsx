import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import '../../style/SideList.scss';
import Viewpost from './View-post';
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
        axios.delete(
            `https://mysper-gh-pages.herokuapp.com/post/post/${id}`,
            {
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            }
        ).then(
            res => {
                this.props.dispatch({ type: "delete_post", payload: this.props.list.filter(item => item._id !== id) });
            }
        )
    }
    clickHandle = (e, post) => {
        console.log(e);
        console.log(post);
        this.setState({ view: true, post: post });
    }
    view = () => {
        return (
            <Viewpost post={this.state.post}></Viewpost>
        );
    }
    new = () => {
        return (
            <h1>new</h1>
        );
    }
    newPost = () => {
        console.log('new post');
        this.setState({ view: false });
    }
    showPost = () => {
        console.log('show post');
    }
    showComment = () => {
        console.log('show comment');
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
                        <div>
                            <button onClick={this.showPost}>post</button>
                            <button onClick={this.showComment}>comment</button>
                        </div>
                        <button className="newPostButton" onClick={this.newPost}>New</button>
                    </div>
                    <div className="bottom">
                        {
                            (this.state.view) ? this.view() : this.new()
                        }
                    </div>
                </div>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        list: state.post.list
    }
}

export default connect(mapStateToProps)(SideList);
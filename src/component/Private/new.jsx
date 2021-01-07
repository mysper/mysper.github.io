import React, { Component, createRef, Fragment } from 'react';
import Markdown from '../Markdown';
import { connect } from 'react-redux';
import '../../style/new.scss';
class New extends Component {
    constructor() {
        super();
        this.title = createRef();
        this.content = createRef();
    }
    handleChange = () => {
        this.props.dispatch({ type: "new_post", content: this.content.current.value, title: this.title.current.value });
    }
    render() {
        return (
            <Fragment>
                <form className="newForm">
                    <input name="title" ref={this.title} onChange={this.handleChange} className="input" value={this.props.newPost.title} />
                    <textarea name="content" ref={this.content} className="input" onChange={this.handleChange} value={this.props.newPost.content}></textarea>
                </form>
                <div className="preView">
                    <Markdown content={this.props.newPost.content} />
                </div>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        newPost: state.post.newPost
    };
}

export default connect(mapStateToProps)(New);
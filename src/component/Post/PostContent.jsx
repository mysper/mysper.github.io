import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from 'axios';
import Markdwon from '../Markdown';
import '../../style/PostContent.scss';
class PostContent extends Component {
    constructor(props) {
        super(props);
        this.state = { content: "# Hello" }
        axios.get(`https://mysper-gh-pages.herokuapp.com/post/${props.match.params.id}`).then(
            response => {
                console.log(response);
                let content = {};
                content[this.props.match.params.id] = response.data;
                props.dispatch({
                    type: 'update_content',
                    payload: { ...content }
                });
            }
        );
    }
    onChange = (e) => {
        this.setState({ content: e.target.value });
    }
    render() {
        return (
            <div className="post">
                {
                    (Object.keys(this.props.content).indexOf(this.props.match.params.id) !== -1) ? <Markdwon content={this.props.content[this.props.match.params.id].content} /> : <div className="loading"></div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    content: state.post.data
});

export default connect(mapStateToProps)(PostContent);
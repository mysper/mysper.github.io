import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../style/PostsList.scss';
import { Link } from 'react-router-dom';
class PostList extends Component {
    listRender = (list) => {
        return Object.keys(list).map(
            index =>
                <Link to={`/post/${list[index]._id}`} className="list_item" key={list[index]._id}>
                    <span className="title">{list[index].title}</span>
                    <div className="comment_data">
                        <span className="comment">{list[index].commentSize} {`comment${(list[index].commentSize > 1) ? 's' : ''}`},</span>
                        <span className="data">{list[index].data}</span>
                    </div>
                </Link>
        );
    }
    render() {
        return (
            <div className="postslist">
                <div className="list">
                    {
                        (this.props.list) ? this.listRender(this.props.list) : <div className="loading"></div>
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProp(state) {
    return {
        list: state.post.data
    }
}

export default connect(mapStateToProp)(PostList);
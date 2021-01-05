import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../style/PostsList.scss';
import { Link } from 'react-router-dom';
class PostList extends Component {
    listRender = (list) => {
        return Object.keys(list).map(
            index => {
                let D = new Date(list[index].date);
                console.log(D.getMonth());
                return (
                    <Link to={`/post/${list[index]._id}`} className="list_item" key={list[index]._id}>
                        <span className="title">{list[index].title}</span>
                        <div className="comment_date">
                            <span className="comment">{list[index].commentSize} {`comment${(list[index].commentSize > 1) ? 's' : ''}`}</span>
                            <span className="date">{`${D.getFullYear()}/${D.getMonth() + 1}/${D.getDate()}`}</span>
                        </div>
                    </Link>
                );
            }
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
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getPostsList } from '../actions/Post';
import PostItem from './postItem';
import '../style/postList.scss';
function mapStateToProps(state) {
    return {
        postsList: state.post.postsList,
    };
}
function Post({ getPostsList, postsList }) {
    useEffect(
        () => {
            getPostsList();
        },
        [getPostsList]
    );
    return (
        <div id="post">
            <h1>Post</h1>
            <div className="postList">
                {postsList.map((x, index) => <PostItem data={x} key={index} />)}
            </div>
        </div>
    );
}

export default connect(mapStateToProps, { getPostsList })(Post);
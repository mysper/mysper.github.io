import Moment from 'react-moment';
import '../style/postItem.scss';
import { Link } from 'react-router-dom';

function PostItem(props) {
    const { date, title, commentSize } = props.data;
    return (
        <Link to="#">
            <div className="postItem">
                <h2>{title}</h2>
                <div className="sub">
                    <span className="comment">{commentSize} comment{(commentSize > 1) ? 's' : ''}</span>
                    <span>&sbquo;&ensp;</span>
                    <Moment format="YYYY/MM/DD">{date}</Moment>
                </div>
            </div>
        </Link>
    );
}

export default PostItem;
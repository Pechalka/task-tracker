
import { connect } from 'react-redux';
import { removeComent } from 'reduxApp/modules/comments';

import CommentsListComponent from 'components/CommentsList/';

const CommentsList = connect(
    state => ({
        comments: state.comments.comments,
    }),
    { removeComent }
)(CommentsListComponent);


export default CommentsList;


import { connect } from 'react-redux';

import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

const CommentsList = ({ comments, deleteComment }) => (
    <div>
        {comments.map(comment => (
            <div key={comment.id}>
                <h4>
                    <span>{comment.userName}</span>
                    <Button
                      bsStyle='link'
                      bsSize='xsmall'
                      onClick={() => deleteComment(comment)}
                    >remove</Button>
                </h4>

                <p>{comment.text}</p>
                <hr />
            </div>
        ))}
    </div>
);

CommentsList.propTypes = {
    comments: PropTypes.array,
    deleteComment: PropTypes.func,
};

import { deleteComment } from '../state';

export default connect(
    state => ({
        comments: state.rest.comments.items,
    }),
    { deleteComment }
)(CommentsList);

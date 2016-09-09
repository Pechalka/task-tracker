import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

const CommentsList = ({ comments, removeComent }) => (
    <div>
        {comments.map(comment => (
            <div key={comment.id}>
                <h4>
                    <span>{comment.userName}</span>
                    <Button
                      bsStyle='link'
                      bsSize='xsmall'
                      onClick={() => removeComent(comment)}
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
    removeComent: PropTypes.func,
};

export default CommentsList;

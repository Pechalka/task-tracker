
import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

import { observer } from 'mobx-react';

const CommentsList = observer(['taskDetails'], ({
    taskDetails: { comments, deleteComment },
    taskId,
}) => (
    <div>
        {comments.map(comment => (
            <div key={comment.id}>
                <h4>
                    <span>{comment.userName}</span>
                    <Button
                      bsStyle='link'
                      bsSize='xsmall'
                      onClick={() => deleteComment(taskId, comment)}
                    >remove</Button>
                </h4>

                <p>{comment.text}</p>
                <hr />
            </div>
        ))}
    </div>
));

CommentsList.propTypes = {
    comments: PropTypes.array,
    deleteComment: PropTypes.func,
};

export default CommentsList;

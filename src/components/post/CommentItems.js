import React from 'react';
import CommentItem from './CommentItem';
const CommentItems = ({comments,postId,postuserid}) => {
    return (
        <div className='comments'>
            {comments && comments.length !==0 && comments.map((comment) => (
            <CommentItem postId={postId} key={comment._id} comment={comment} postuserid={postuserid}/>
        ))}
        </div>
    )
}


export default CommentItems;

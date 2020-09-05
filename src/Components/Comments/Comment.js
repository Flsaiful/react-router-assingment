import React, { useState, useEffect } from 'react';
import CommentDetail from './CommentDetail';

const Comment = (props) => {
    const[comments,setComments]=useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=4`)
        .then(res => res.json())
        .then(data => setComments(data))
    },[])
    return (
        <div>
            {
                comments.map(comment =><CommentDetail comment={comment} ></CommentDetail>)
            }
        </div>
    );
};

export default Comment;
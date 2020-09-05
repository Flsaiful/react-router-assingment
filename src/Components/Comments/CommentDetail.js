import React from 'react';

const CommentDetail = (props) => {

   const{name,email,body}=props.comment;
   
    return (
        <div>
            <h1>name: {name}</h1>
            <h3>Email:{email}</h3>
            <p>Body:{body}</p>
             
        </div>
    );
};

export default CommentDetail;
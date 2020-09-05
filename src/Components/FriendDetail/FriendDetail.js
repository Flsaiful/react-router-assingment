import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import './FriendDetail.css'
import Comment from '../Comments/Comment'

const FriendDetail = () => {
    const { aboutId } = useParams();
    const [about, setAbout] = useState({})

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${aboutId}`)
            .then(res => res.json())
            .then(data => setAbout(data))
    })
    return (
        <>
            <Container className="friendDetail-containar" maxWidth="sm">
                <h4>ID:{aboutId}</h4>
                <h1><span className='detail-style'>Title:</span> {about.title}</h1>
                <p><span className='detail-style'>BODY: </span>{about.body}</p>
            </Container>
            <Comment></Comment>

        </>
    );
};

export default FriendDetail;
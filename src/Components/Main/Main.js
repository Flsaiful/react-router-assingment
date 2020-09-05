import React, { useState, useEffect } from 'react';
import Header from './Header';



const Main = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <>
            <div style={{ backgroundColor: 'gray' }}>
                <h1 style={{ textAlign: 'center' }}>THIS IS OUR DATA:</h1>
                {
                    posts.map(post => <Header post={post}></Header>)
                }
            </div>
        </>
    );
};

export default Main;
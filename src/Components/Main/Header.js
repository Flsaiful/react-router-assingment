import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Tooltip from '@material-ui/core/Tooltip';
import './Header.css'


const Header = (props) => {

    const { title, body, id } = props.post;
    return (

        <Container className="header-style" maxWidth="sm">
            <h1><span className='span-style'>Title: </span> {title}</h1>
            <p><span className='span-style'>Body: </span> {body}</p>
            <Link id="btn" to={`/about/${id}`}>
                <Tooltip title="You Can Show Detail" placement="right-start" aria-label="add">
                    <Button variant="contained" color="primary">See Detail</Button>
                </Tooltip>
            </Link>

        </Container>

    );
};

export default Header;
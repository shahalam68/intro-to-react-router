import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    const {id,title,userID,body} = post;
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <h3>Details about post: {id}</h3>
            <h5>{title}</h5>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;
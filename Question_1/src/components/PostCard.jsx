import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const PostCard = ({ post }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6">{post.title}</Typography>
                <Typography variant="body2">{post.content}</Typography>
                <Typography variant="caption">Comments: {post.comments.length}</Typography>
            </CardContent>
        </Card>
    );
};

export default PostCard;
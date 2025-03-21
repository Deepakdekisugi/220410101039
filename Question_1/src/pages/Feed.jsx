import React, { useEffect, useState } from 'react';
import { fPosts } from '../api';
import PostCard from '../components/PostCard';
import Loader from '../components/Loader';
import { Container, Grid } from '@mui/material';

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPosts = async () => {
            const data = await fPosts();
            setPosts(data);
            setLoading(false);
        };

        getPosts();

        const interval = setInterval(() => {
            getPosts(); 
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Container>
            {loading ? (
                <Loader />
            ) : (
                <Grid container spacing={2}>
                    {posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map(post => (
                        <Grid item xs={12} sm={6} md={4} key={post.id}>
                            <PostCard post={post} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
};

export default Feed;
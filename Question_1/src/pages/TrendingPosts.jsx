import React, { useEffect, useState } from 'react';
import { fPosts } from '../api';
import PostCard from '../components/PostCard';
import Loader from '../components/Loader';
import { Container, Grid } from '@mui/material';

const TrendingPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPosts = async () => {
            const data = await fPosts();
            const maxComments = Math.max(...data.map(post => post.comments.length));
            const trendingPosts = data.filter(post => post.comments.length === maxComments);
            setPosts(trendingPosts);
            setLoading(false);
        };
        getPosts();
    }, []);

    return (
        <Container>
            {loading ? (
                <Loader />
            ) : (
                <Grid container spacing={2}>
                    {posts.map(post => (
                        <Grid item xs={12} sm={6} md={4} key={post.id}>
                            <PostCard post={post} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
};

export default TrendingPosts;
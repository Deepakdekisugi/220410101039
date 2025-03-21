import React, { useEffect, useState } from 'react';
import { fUsers } from '../api';
import UserCard from '../components/UserCard';
import Loader from '../components/Loader';
import { Container, Grid } from '@mui/material';

const TopUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUsers = async () => {
            const data = await fUsers();
            const sortedUsers = data.sort((a, b) => b.postCount - a.postCount).slice(0, 5);
            setUsers(sortedUsers);
            setLoading(false);
        };
        getUsers();
    }, []);

    return (
        <Container>
            {loading ? (
                <Loader />
            ) : (
                <Grid container spacing={2}>
                    {users.map(user => (
                        <Grid item xs={12} sm={6} md={4} key={user.id}>
                            <User Card user={user} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
};

export default TopUsers;
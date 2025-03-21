// src/components/UserCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const UserCard = ({ user }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5">{user.name}</Typography>
                <Typography variant="body2">Posts: {user.postCount}</Typography>
            </CardContent>
        </Card>
    );
};

export default UserCard;
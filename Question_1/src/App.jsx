import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopUsers from './pages/TopUsers';
import TrendingPosts from './pages/TrendingPosts';
import Feed from './pages/Feed';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const App = () => {
    return (
        <Router>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Social Media Analytics
                    </Typography>
                    <Button color="inherit" href="/">Top Users</Button>
                    <Button color="inherit" href="/trending">Trending Posts</Button>
                    <Button color="inherit" href="/feed">Feed</Button>
                </Toolbar>
            </AppBar>
            <Routes>
                <Route path="/" exact component={TopUsers} />
                <Route path="/trending" component={TrendingPosts} />
                <Route path="/feed" component={Feed} />
            </Routes>
        </Router>
    );
};

export default App;
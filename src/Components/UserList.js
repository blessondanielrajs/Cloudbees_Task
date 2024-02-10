
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
            <Grid item xs={10} md={6}>
                <Card>
                    <CardContent>
                        <Typography variant="h4" gutterBottom align="center">User List</Typography>
                        {users.map(user => (
                            <ListItem key={user.id} component={Link} to={`/user/${user.login}`} button>
                                <ListItemAvatar>
                                    <Avatar src={user.avatar_url} alt={user.login} />
                                </ListItemAvatar>
                                <ListItemText primary={user.login} />
                            </ListItem>
                        ))}
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default UserList;

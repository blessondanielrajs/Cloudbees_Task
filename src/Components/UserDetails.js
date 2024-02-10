import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Card, CardContent, Grid } from '@mui/material';

const UserDetails = () => {
    const { username } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => setUser(data));
    }, [username]);

    if (!user) return <Typography variant="h6">Loading...</Typography>;

    return (
        <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
            <Grid item xs={10} sm={8} md={6}>
                <Card>
                    <CardContent>
                        <Typography variant="h4" gutterBottom align="center">User Details</Typography>

                        <Typography variant="h5" gutterBottom>{user.login}</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="body1"><strong>Name:</strong></Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1">{user.name}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1"><strong>Company:</strong></Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1">{user.company}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1"><strong>Followers:</strong></Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1">{user.followers}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1"><strong>Following:</strong></Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1">{user.following}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1"><strong>Public Repositories:</strong></Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1">{user.public_repos}</Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default UserDetails;


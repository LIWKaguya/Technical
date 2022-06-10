import { Typography, Card, CardContent, CardActions, Button, Avatar, CardHeader, Grid } from "@mui/material"
import { red } from "@mui/material/colors"

const UsersTable = ({ users }) => {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                <Card>
                    <CardHeader 
                    avatar={
                        <Avatar sx={{ bgcolor: red[500]}}>
                            P
                        </Avatar>
                    }
                    />
                    <CardContent>
                        <Typography>
                            {users[0]?.id}
                        </Typography>
                        <Typography>
                            {users[0]?.name}
                        </Typography>
                            <Typography>
                            {users[0]?.email}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">More Details</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                <Card>
                    <CardHeader 
                    avatar={
                        <Avatar sx={{ bgcolor: red[500]}}>
                            P
                        </Avatar>
                    }
                    />
                    <CardContent>
                        <Typography>
                            {users[1]?.id}
                        </Typography>
                        <Typography>
                            {users[1]?.name}
                        </Typography>
                            <Typography>
                            {users[1]?.email}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">More Details</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                <Card>
                    <CardHeader 
                    avatar={
                        <Avatar sx={{ bgcolor: red[500]}}>
                            P
                        </Avatar>
                    }
                    />
                    <CardContent>
                        <Typography>
                            {users[2]?.id}
                        </Typography>
                        <Typography>
                            {users[2]?.name}
                        </Typography>
                            <Typography>
                            {users[2]?.email}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">More Details</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                <Card>
                    <CardHeader 
                    avatar={
                        <Avatar sx={{ bgcolor: red[500]}}>
                            P
                        </Avatar>
                    }
                    />
                    <CardContent>
                        <Typography>
                            {users[2]?.id}
                        </Typography>
                        <Typography>
                            {users[2]?.name}
                        </Typography>
                            <Typography>
                            {users[2]?.email}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">More Details</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default UsersTable
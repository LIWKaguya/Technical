import { Card, CardHeader, Avatar, CardContent, Typography, CardActions, Button } from "@mui/material"

const UserCard = ({ user }) => {

    return (
        <>
        <Card sx={{
            justifyContent : 'center',
            alignItems: 'center'
        }}>
        <CardHeader 
        avatar={
            <Avatar sx={{ bgcolor: '#d6c5c7'}}>
                {user.name[0]}
            </Avatar>
        }
        />
        <CardContent>
            <Typography>
                {user.id}
            </Typography>
            <Typography>
                {user.name}
            </Typography>
                <Typography>
                {user.email}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">More Details</Button>
            </CardActions>
        </Card>
        </>
    )
}

export default UserCard
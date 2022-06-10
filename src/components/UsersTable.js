import { Typography, Card, CardContent, CardActions, Button, Avatar, CardHeader } from "@mui/material"
import { red } from "@mui/material/colors"

const UsersTable = ({ users }) => {
    return (
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
    )
}

export default UsersTable
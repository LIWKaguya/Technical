import { CardHeader, Avatar, CardContent, Typography, Link } from "@mui/material"

const UserNotDetail = ({ user }) => {
    return (
        <>
        <CardHeader 
        avatar={
            <Avatar sx={{ bgcolor: '#808080'}}>
                {user.name[0]}
            </Avatar>
        }
        />
        <CardContent>
            <Typography variant="h5">
                {user.name}
            </Typography>
            <Typography style={{
                color: '#808080'
            }}>
                @{user.username}
            </Typography>
            <Link underline='always'>
                http://{user.email}
            </Link>
        </CardContent>  
        </>
    )
}

export default UserNotDetail
import { Avatar, CardContent, Typography, Link } from "@mui/material"

const UserNotDetail = ({ user }) => {
    return (
        <>
        <CardContent style={{
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Avatar style={{ 
                bgcolor: '#808080',
                height: 75,
                width: 75,
                margin: 'auto'
            }}>
                {user.name[0]}
            </Avatar>
            <Typography variant="h5">
                {user.name}
            </Typography>
            <Typography style={{
                color: '#808080',
                fontStyle: 'italic'
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
import { Box, Grid } from "@mui/material"
import UserCard from "./UserCard"

const UsersTable = ({ users }) => {
    return (
        <Box justifyContent='center' alignItems='center'>
            <Grid container spacing={3}>
                {users.map(user => 
                    <Grid item xs={4} key={user.id}>
                        <UserCard user={user}/> 
                    </Grid>    
                )}
            </Grid>
        </Box>
    )
}

export default UsersTable
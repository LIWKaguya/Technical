import { Grid } from "@mui/material"
import UserCard from "./UserCard"

const UsersTable = ({ users }) => {
    return (
            <Grid container spacing={3}>
                {users.map(user => 
                    <Grid item xs={4} key={user.id}>
                        <UserCard user={user}/> 
                    </Grid>    
                )}
            </Grid>
    )
}

export default UsersTable
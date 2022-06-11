import { Card, CardActions, Button } from "@mui/material"
import { useState } from "react"
import UserDetail from "./UserDetail"
import UserNotDetail from "./UserNotDetail"

const UserCard = ({ user }) => {
    const [details, setDetails] = useState(false)

    return (
        <>
        <Card>
        {details ? <UserDetail user={user} /> : <UserNotDetail user={user} />}
        <CardActions>
                <Button variant="contained" onClick={() => {setDetails(!details)}}>{details ? 'Less Details' : 'More Details'}</Button>
        </CardActions>
        </Card>
        </>
    )
}

export default UserCard
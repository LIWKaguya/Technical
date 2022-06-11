import { CardContent, Typography } from "@mui/material"

const UserDetail = ({ user }) => {

    return (
        <>
        <CardContent>
            <Typography>
                - name: {user.name}
            </Typography>
            <Typography>
                - username: {user.username}
            </Typography>
            <Typography>
                - email: {user.email}
            </Typography>
            <Typography>
                - phone: {user.phone}
            </Typography>
            <Typography>
                - company: {user.company.name}
            </Typography>
            <Typography>
                - website: {user.website}
            </Typography>
            <Typography>
                - address: <br />
                &ensp;    • street: {user.address.street} <br />
                &ensp;    • suite: {user.address.suite} <br />
                &ensp;    • city: {user.address.city} <br />
                &ensp;    • zipcode: {user.address.zipcode} <br />
            </Typography>
            </CardContent>
        </>
    )
}

export default UserDetail
import { useState, useEffect } from "react";
import UsersTable from "./components/UsersTable";
import usersService from './services/users'

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    usersService.getAll().then(initUsers => {
      setUsers(initUsers)
    })
  }, [])

  return (
      <UsersTable users={users} />
  );
}

export default App;

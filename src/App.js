import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [num, setNum] = useState(0)
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
      setUsers(response.data)
    })
  }, [])

  console.log(users)

  return (
    <>
      <h1>Yes</h1>
      <h2>{num}</h2>
      <button onClick={() => {setNum(num+1)}}>Increase</button>
    </>
  );
}

export default App;

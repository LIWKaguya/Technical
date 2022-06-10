import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0)

  return (
    <>
      <h1>Yes</h1>
      <h2>{num}</h2>
      <button onClick={() => {setNum(num+1)}}>Increase</button>
    </>
  );
}

export default App;

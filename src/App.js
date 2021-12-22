import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(res => {
        setData(res.data)
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  return (
    <div className="App">
      {data.map((val, ind) => {
        return (
          <p key={ind}>{val.id}</p>
        )
      })}
    </div>
  );
}

export default App;

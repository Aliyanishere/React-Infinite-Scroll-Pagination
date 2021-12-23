// Note: I am using Infinite scroll component library in this repo.

import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './components/loader';


function App() {

  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [hasmore, setHasmore] = useState(true);
  useEffect(() => {

    // Getting data from fake API

    // This api call is for getting the length of all the data which I am calling and saving it on state when the page is load.
    axios.get(`https://jsonplaceholder.typicode.com/todos`)
      .then(res => setAllData(res.data));

    // On this api call I am setting a limit of 10 items to be shown when the page is load.
    axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
      .then(res => {
        setData(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [limit]);

  const fetchData = () => {
    setTimeout(() => {
      if (limit >= allData.length) {
        setHasmore(false);
      } else {
        // Adding 10 more items in the previous ones
        setLimit(limit + 10);
        setHasmore(true);
      }
    }, 700);
  };

  return (
    <div className="App">
      <InfiniteScroll
        dataLength={data.length}
        next={fetchData}
        hasMore={hasmore}
        loader={<Loader />}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all 🎉</b>
          </p>
        }>
        {data.map((val, ind) => {
          return <p key={ind}>{val.id}</p>
        })}
      </InfiniteScroll>
    </div>
  );
}

export default App;
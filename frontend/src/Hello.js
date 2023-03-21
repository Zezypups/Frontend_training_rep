import {useState, useEffect} from 'react';
import axios from 'axios';


export default function Hello (props) {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get('/api')
      .then((response) => setData(response.data.message))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <p>{!data ? "Loading..." : data}</p>
    </div>
  )
};

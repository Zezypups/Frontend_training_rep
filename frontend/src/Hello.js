import {useState, useEffect} from 'react';
import axios from 'axios';


export default function Hello () {
const [hello, setHello] = useState([]);

useEffect(() =>{
  axios
  .get('/api')
  .then(response => {
    setHello(response.data);
  })
  .catch(error => {
    console.log(error);
  });
}, []);

return (
  <>
  </>
);
};


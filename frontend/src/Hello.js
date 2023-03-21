import {useState, useEffect} from 'react';
import axios from 'axios';
import {Container, Alert} from "@mui/material"
import Snackbar from '@mui/material/Snackbar';


export default function Hello (props) {
  
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
      console.log(data)
  })
  return (
    <div>
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
};


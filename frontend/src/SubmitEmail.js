
import axios from 'axios'
import {useState} from 'react';
import Snackbar from "@mui/material";


export default function SubmitEmail() {
  const [email, setEmail] = useState(''); 
  const [status, setStatus] = useState('');
  const [err, setErr] = useState('');
  const [open, setOpen] = useState(false);
  
  const handleInput = (event) => {
      setEmail(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    axios
        .post(`/api/submit/${email}`, {email})
        .then(response => setStatus(response.data.message))
        .catch(error => setErr(error))
  }

  const handleClick = () => {
    setOpen(true);
  };

const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <div>
        {status ? 
                    <Alert 
                        variant="filled" 
                        severity="success" 
                        onClose={handleClose}
                        sx={{ width: '100%' }}
                    >
                        {status}
                    </Alert>
                : 
                    <Alert 
                        variant="filled" 
                        severity="warning" 
                        onClose={handleClose}
                        sx={{ width: '100%' }}
                    >
                        {err}
                    </Alert>}
    </div>);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Email: <input 
                type="email" 
                name="email" 
                value={email} 
                onChange={handleInput}>
                </input>
        <button 
                type="submit"
                className="submit-button" onClick={handleClick}>
                  Submit
        </button>
        <Snackbar 
                open={open} 
                autoHideDuration={3000} 
                anchorOrigin={{ vertical:'top', horizontal: 'left',  }}
                action={action}
                onClose={handleClose}
                > 
        </Snackbar>
      </form>
    </div>
  )
}
/*export default function SubmitEmail() {
  const addPosts = (title, body) => {
    client
       .post('/api/submit/:email', {
          title: title,
          body: body,
       })
       .then((response) => {
          setPosts((posts) => [response.data, ...posts]);
       });
 };
}
*/
import axios from 'axios'
import {useState} from 'react';


export default function SubmitEmail() {
  const [email, setEmail] = useState(''); 
  
  const handleInput = (event) => {
      setEmail({...email, [event.target.name]: event.target.value})
  }

  function handleSubmit(event) {
    event.preventDefault()
    axios.post(`/api/submit/${email}`, {email})
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        Email: <input type="text" name="email" onChange={handleInput}></input>
        <button className="submit-button">Submit</button>
      </form>
    </div>
  )
}
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
import {useState, useEffect} from 'react';


export default function SubmitEmail() {
  const [post, setPost] = useState({
    title: '',
    body: ''
  })
  const handleInput = (event) => {
      setPost({...post, [event.target.name]: event.target.value})
  }

  function handleSubmit(event) {
    event.preventDefault()
    axios.post('/api/submit/:email', {post})
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        Email: <input type="text" name="email" onChange={handleInput}></input>
        <button className="">Submit</button>
      </form>
    </div>
  )
}
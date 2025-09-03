import React ,{useState} from 'react'

export default function Message() {
const [to , setTo] = useState('Alice')
const [message , setMessage] = useState("hello")
function handleSubmit(e){
 e.preventDefault()
 alert(`You said ${message} to ${to}`)
}
  return (
    <>
      <form onSubmit={handleSubmit} id='message'>
        <label >To:{''}
        <select value={to}
        onChange={e=> setTo(e.target.value)} id='select' >
     <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
    </label>
    <textarea 
    id='textarea'
    value={message}
    onChange={e=> setMessage(e.target.value)}
    />
    <button type="submit">Send</button>
      </form>
    
    </>
  
  )
}

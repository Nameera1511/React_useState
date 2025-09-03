import React , {useState} from 'react'

export default function Text_Show() {
 const [show , setShow] = useState()

  return (
     <div className='text_show'>
      {show && <h2>Hello, React!</h2>}
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
    </div>
  )
}

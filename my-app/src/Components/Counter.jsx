import React ,{useState} from 'react'

export default function Counter() {
    const [number, setNumber] = useState(0);

  return (
    <>
    <div id='counter'>
      <h1>{number}</h1>
<button onClick={()=>{
  setNumber(number + 2)
 }}>
+2
</button>
    </div>

    </>
  )
}

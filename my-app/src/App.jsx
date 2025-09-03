import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'
import Message from './Components/Message'
import Text_Show from './Components/Text_Show'
import Form from './Components/Form'

function App() {

  return (
    <>
      <Counter />
     <Message/>
     <Text_Show/> 
     <Form/>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import UserContextProvide from './context/UserContextProvider'
import Login from './components/Login'
import Profile  from './components/Profile'

function App() {
  //dssonst [count, setCount] = useState(0)

  return (
    <UserContextProvide>
      <h1>React API context</h1>
      <Login/>
      <Profile/>
    </UserContextProvide>
  )
}

export default App

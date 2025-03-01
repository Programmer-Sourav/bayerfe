import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './Login'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element= {<LoginPage/>}/> 
      <Route path='/register' element = {<RegisterPage/>}/>
    </Routes>
     
    </>
  )
}

export default App

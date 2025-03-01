import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './Login'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import HealthcarePortal from './components/HealthcarePortal'
import UserDashboard from './components/UserDashboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element= {<HealthcarePortal/>}/> 
      <Route path="/login" element= {<LoginPage/>}/> 
      <Route path='/register' element = {<RegisterPage/>}/>
      <Route path='/user' element = {<UserDashboard/>}/>
    </Routes>
     
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './Pages/login'
import Register from './Pages/register'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
   <Routes>
    <Route  path='/Login'/>
    <Route  path='/Register'/>
   </Routes>
    </BrowserRouter>
  )
}

export default App

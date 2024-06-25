import Login from './Pages/login';
import Register from './Pages/register';
import Recoverpassword from './Pages/recoverpassword';
import Forgotpassword from './Pages/forgotpassword';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/recoverpassword' element={<Recoverpassword />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgotpassword' element={<Forgotpassword />} />
        <Route path='/register' element={<Register />} />

        <Route path='/*' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

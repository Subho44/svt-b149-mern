import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Addkyc from './pages/Addkyc'
import Viewkyc from './pages/Viewkyc'
import Navbardata from './components/Navbardata'
import Register from './pages/Register'
import PrivateRoute from './utils/PrivateRoute'
import Login from './pages/Login'
const App = () => {

  return <>
    <BrowserRouter>
      <Navbardata />
      <Routes>
        <Route path='/' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route element={<PrivateRoute/>}>   
        <Route path='/add' element={<Addkyc />}></Route>
        <Route path='/view' element={<Viewkyc />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  </>
}

export default App
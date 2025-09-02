import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Addkyc from './pages/Addkyc'
import Viewkyc from './pages/Viewkyc'
import Navbardata from './components/Navbardata'
const App = () => {

  return <>
  <BrowserRouter>
  <Navbardata/>
    <Routes>
      <Route path='/' element={<Addkyc/>}></Route>
      <Route path='/add' element={<Addkyc/>}></Route>
      <Route path='/view' element={<Viewkyc/>}></Route>
    </Routes>
  </BrowserRouter>

  </>
}

export default App
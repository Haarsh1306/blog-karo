import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Signin} from './pages/Signin'
import {Signup} from './pages/Signup'
import {Blogs} from './pages/Blogs'

import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<Signin/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/blogs' element={<Blogs/>} />
         
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

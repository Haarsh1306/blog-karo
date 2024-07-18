import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Signin} from './pages/Signin'
import {Signup} from './pages/Signup'
import {Blogs} from './pages/Blogs'
import { Blog } from './pages/Blog'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<Signin/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/blogs' element={<Blogs/>} />
          <Route path="/blog/get/:id" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

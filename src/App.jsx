import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'

const App = () => {
  return (
    <div>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/video/:categoryId/:videoId' element={<Video/>} />
</Routes>
  </div>
  )
}

export default App
import { useState } from 'react'
import Header from './components/Header'
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom'
import LayOut from './components/LayOut'
import Home from './pages/Home'
import Skill from './pages/Skill'
import About from './pages/About'
import Contact from './pages/Contact'


function App() {


  return (
    <div className='bg-mid-black text-white'>
      <BrowserRouter >
      <Routes >
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path='/skills' element={<Skill/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Route>



      </Routes>
    </BrowserRouter>
    </div>
    

  )
}

export default App

import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/navbar/Navbar'
import Hero from './Pages/Hero'
import About from './Pages/About'
import Service from './Pages/Service'
import Menu from './Pages/Menu'
import Pages from './Pages/Pages'
import Contact from './Pages/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/pages' element={<Pages />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

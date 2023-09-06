import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import LayOut from './components/LayOut'
import Home from './pages/Home'
import Skill from './pages/Skill'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Loader from './components/Loader'


function App() {
const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false)
      }, 4500)
    }
    fakeDataFetch()
  }, [])

  return (
    <>
      {
        isLoading ? <Loader isLoading={isLoading} setIsLoading={setIsLoading} /> : (
          <div className='bg-mid-black text-white'>
            <BrowserRouter >
              <Routes >
                <Route path="/" element={<LayOut />}>

                  <Route index element={<Home />} />
                  <Route path='/skills' element={<Skill />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/projects' element={<Projects />} />
                </Route>



              </Routes>
            </BrowserRouter>
          </div>
        )
      }


    </>


  )
}

export default App

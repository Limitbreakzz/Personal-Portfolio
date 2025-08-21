import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Education from './pages/Education'
import WorkExperience from './pages/WorkExperience'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
      <Router>
        <div className='flex flex-col min-h-screen'>
          <Header />

          <div className="flex-grow">
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/AboutMe' element={<AboutMe />} />
              <Route path='/Education' element={<Education />} />
              <Route path='/WorkExperience' element={<WorkExperience />} />
              <Route path='/Projects' element={<Projects />} />
              <Route path='/Skills' element={<Skills />} />
              <Route path='/Contact' element={<Contact />} />
              <Route path='/Blog' element={<Blog />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Partnerships from './pages/Patnerships'
import Services from './pages/Services'
import Project from './pages/Project'
import NotFound from './pages/NotFound'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contacts />} />
          <Route path='/partnerships' element={<Partnerships />} />
          <Route path='/services' element={<Services />} />
          <Route path='/projects' element={<Project />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <HomePage />
            <Footer />
          </>
        } />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer.jsx'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
// ... other imports

function App() {
  return (
    <Router>  {/* This must wrap everything that uses Link */}
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          {/* ... other routes */}
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FlameBackground from './components/FlameBackground'
import Home from './pages/Home'
import Items from './pages/Items'
import Offers from './pages/Offers'
import Gallery from './pages/Gallery'
import BehindScenes from './pages/BehindScenes'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div dir="rtl" className="min-h-screen relative" style={{ background: 'var(--bg)' }}>
      <FlameBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Items" element={<Items />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/behind-scenes" element={<BehindScenes />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}
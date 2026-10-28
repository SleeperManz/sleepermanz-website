import { Route, Routes, useLocation } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import { useEffect } from "react"
import Portofolio from "./pages/Portofolio"
import Services from "./pages/Services"

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />

      {/* Padding kecil di mobile, lebar di desktop */}
      <div className="w-full px-4 py-4 md:px-16 md:py-6">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <div className="py-6 px-16">
        <Navbar />
      </div>
      <Home />
      <Footer />
    </>
  )
}

export default App

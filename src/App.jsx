import Main from "./components/Main"
import { Sidebar } from "./components/Sidebar"
import Footer from "./components/Footer"
import { useState } from "react"

function App() {
  const [showModal, setShowModal] = useState(true)
  return (
    <>
      <Main/>
      {showModal && (
        <Sidebar/>
        )}
      <Footer/>
    </>
  )
}

export default App

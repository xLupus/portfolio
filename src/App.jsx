import { EnvelopeSimple, Eyeglasses, FileHtml, GithubLogo, House, LinkedinLogo, MapPin, Pencil, Phone, Target } from "@phosphor-icons/react"
import { NavLink, Outlet } from "react-router-dom"
import { Navbar } from "./components/Navbar"

function App() {
  return (
    <div className="flex">
      <Navbar />

      <main className="flex justify-center flex-1 max-h-screen overflow-y-auto dark:bg-[#171923] dark:text-[#D7D7DC]">
        <Outlet />
      </main>
    </div>
  )
}

export default App

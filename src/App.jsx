import { EnvelopeSimple, Eyeglasses, FileHtml, GithubLogo, House, LinkedinLogo, MapPin, Pencil, Phone, Target } from "@phosphor-icons/react"
import { NavLink, Outlet } from "react-router-dom"

function App() {
  return (
    <div className="flex">
      <aside className="hidden lg:flex md:flex-col md:items-center h-screen max-w-xs w-full bg-slate-300 py-10">
        <div className="flex-1">
          <h1 className="flex items-center gap-x-3 font-bold mb-24 text-2xl text-center">
            <Eyeglasses size={30} weight="bold" />  VINÍCIUS SOUZA
          </h1>

          <nav className="flex flex-col space-y-4 font-semibold">
            <NavLink to='/' className="flex items-center gap-x-3">
              <House size={24} weight="fill" /> HOME
            </NavLink>

            <NavLink to='/sobre' className="flex items-center gap-x-3">
              <Pencil size={24} weight="fill" /> SOBRE
            </NavLink>

            <NavLink to='/competencias' className="flex items-center gap-x-3">
              <Target size={24} weight="bold" /> O QUE EU POSSO FAZER
            </NavLink>

            <NavLink to='/portifolio' className="flex items-center gap-x-3">
              <FileHtml size={24} /> PORTIFOLIO
            </NavLink>
          </nav>
        </div>

        <div className="flex flex-col gap-y-4">
          <span className="flex items-center gap-x-3">
            <Phone size={24} weight="fill" /> (11) 97826-8743
          </span>

          <span className="flex items-center gap-x-3">
            <EnvelopeSimple size={24} /> vinicius.as.dev@outlook.com
          </span>

          <span className="flex items-center gap-x-3">
            <MapPin size={24} weight="fill" /> São Paulo - SP
          </span>

          <hr className="border-zinc-400 my-3" />

          <a href="https://www.linkedin.com/in/vinicius-as-dev/" target="_blank" className="flex items-center gap-x-3">
            <LinkedinLogo size={24} color="#4f73ba" weight="fill" /> in/vinicius-as-dev
          </a>

          <a href="https://github.com/xLupus" target="_blank" className="flex items-center gap-x-3">
            <GithubLogo size={24} weight="fill" /> Vinicius A Souza
          </a>
        </div>
      </aside>


      <main className="flex-1 max-h-screen overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default App

import { NavLink, Outlet } from "react-router-dom"

function App() {
  return (
    <div className="flex">
      <aside className="flex flex-col items-center h-screen max-w-xs w-full bg-slate-100 py-10">
        <div className="flex-1">
          <h1 className="font-bold mb-24 text-2xl">VINICIUS SOUZA</h1>

          <nav className="flex flex-col items-center space-y-4 font-semibold">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/sobre'>Sobre</NavLink>
            <NavLink to='/portifolio'>Portifolio</NavLink>
          </nav>
        </div>

        <div>
          <span className="mr-3">Github</span>
          <span>Linkedin</span>
        </div>
      </aside>

      <main className="flex-1 max-h-screen overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default App

import { Outlet } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { useState } from "react";
import { List, XSquare } from "@phosphor-icons/react";

function App() {
  const [isOpened, setIsOpened] = useState(true);

  return (
    <div className="relative flex">

      {isOpened && <Navbar />}

      <main className="flex justify-center flex-1 min-h-screen h-full overflow-y-auto dark:bg-[#171923] dark:text-[#D7D7DC]">
        <Outlet />
      </main>
    </div>
  )
}

export default App

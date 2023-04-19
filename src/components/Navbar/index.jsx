import { EnvelopeSimple, GithubLogo, LinkedinLogo, MapPin, Phone } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <aside className="hidden lg:flex md:flex-col md:items-center h-screen text-sm w-72 bg-[#F5F5FA] dark:bg-[#12141D] dark:text-[#A8A8AF] py-10">
        <div className="flex flex-col flex-1 gap-y-16">
          <h1 className="flex items-center gap-x-3 font-bold text-2xl text-center">
            &lt;ViniciusSouza /&gt;
          </h1>

          <nav className="flex flex-col space-y-7 font-semibold">
            <NavLink to='/' className="flex items-center gap-x-3">
              HOME
            </NavLink>

            <NavLink to='/sobre' className="flex items-center gap-x-3">
              SOBRE
            </NavLink>

            <NavLink to='/competencias' className="flex items-center gap-x-3">
              O QUE EU POSSO FAZER
            </NavLink>

            <NavLink to='/portifolio' className="flex items-center gap-x-3">
              PORTIFOLIO
            </NavLink>
          </nav>
        </div>

        <div className="flex flex-col gap-y-4">
          <a href="https://www.linkedin.com/in/vinicius-as-dev/" target="_blank" className="flex items-center gap-x-3">
            <LinkedinLogo size={24} color="#4f73ba" weight="fill" /> in/vinicius-as-dev
          </a>

          <a href="https://github.com/xLupus" target="_blank" className="flex items-center gap-x-3">
            <GithubLogo size={24} weight="fill" /> Vinicius A Souza
          </a>

          <span className="flex items-center gap-x-3">
            <Phone size={24} weight="fill" /> (11) 97826-8743
          </span>

          <a href="mailto:vinicius.as.dev@outlook.com" className="flex items-center gap-x-3">
            <EnvelopeSimple size={24} /> vinicius.as.dev@outlook.com
          </a>

          <span className="flex items-center gap-x-3">
            <MapPin size={24} weight="fill" /> São Paulo - SP
          </span>
        </div>
      </aside>
    </>
  )
}
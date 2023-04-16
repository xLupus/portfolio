import banner from '../../assets/banner.jpg'
import curriculo from '../../assets/curriculo.pdf'

export function HomePage() {
  return (
    <>
      <div className="flex justify-center items-center h-screen px-6">
        <div className="max-w-2xl w-full flex flex-col mr-10 transition-all">
          <span className="mb-3 font-semibold">
            Olá, sejá bem vindo ao meu portifolio!
          </span>

          <h1 className="text-5xl font-bold">
            Eu sou um <span className='text-blue-700'>Web Developer</span>
          </h1>

          <span className="mt-5 mb-8 font-semibold">
            Responsável por criar e/ou fazer manutenção de websites.
          </span>

          <a
            href={curriculo}
            target='_blank'
            className="w-40 h-10 p-0 bg-blue-700 hover:bg-blue-500 transition-colors text-white font-bold rounded-lg flex justify-center items-center cursor-pointer"
          >
            Curriculum
          </a>
        </div>

        <img src={banner} width='600' />
      </div>
    </>
  )
}
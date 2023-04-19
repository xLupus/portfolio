import banner from '../../assets/banner.png'
import curriculo from '../../assets/curriculo.pdf'

export function HomePage() {
  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center h-screen px-6">
        <div className="max-w-2xl w-full flex flex-col order-2 md:order-1 mr-10 transition-all">
          <span className="mb-3 font-semibold">
            Olá, sejá bem vindo ao meu portifolio!
          </span>

          <h1 className="text-5xl font-bold">
            Eu sou um <span className='text-yellow-500'>Web Developer</span>
          </h1>

          <span className="mt-5 mb-8 font-semibold">
            Responsável por criar e fazer manutenção de websites.
          </span>

          <a
            href={curriculo}
            target='_blank'
            className="w-40 h-10 p-0 bg-yellow-600 hover:bg-blue-500 transition-colors text-white font-bold rounded-lg flex justify-center items-center cursor-pointer"
          >
            Curriculum
          </a>
        </div>

        <img src={banner} width='600' className='order-1 md:order-2'/>
      </div>
    </>
  )
}
import banner from '../../assets/banner.png'

export function HomePage() {
  return (
    <section className='self-center flex items-center px-6'>
      <div className="flex flex-col order-2 md:order-1 mr-10 transition-all">
        <span className="mb-3 font-semibold">
          Olá, sejá bem vindo ao meu portifolio!
        </span>

        <h1 className="text-5xl font-bold">
          Eu sou um <span className='text-[#3bbb81]'>Web&nbsp;Developer</span>
        </h1>

        <span className="mt-5 mb-8 font-semibold">
          Responsável por criar e fazer manutenção de websites.
        </span>

        <a
          target='_blank'
          className="w-40 h-10 p-0 bg-[#3BBB81] hover:bg-blue-500 transition-colors text-white font-bold rounded-lg flex justify-center items-center cursor-pointer"
        >
          Curriculum
        </a>
      </div>

      <img src={banner} width='600' className='order-1 md:order-2 dark:brightness-75' />
    </section>
  )
}
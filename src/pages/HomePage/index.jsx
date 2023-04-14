import banner from '../../assets/banner.jpg'

export function HomePage() {
  return (
    <>
      <div className="flex justify-center items-center h-screen px-6">
        <div className="max-w-3xl w-full flex flex-col justify-between mr-10 2xl:mr-20 transition-all">
          <span className="mb-3">Bem vindo ao meu portifolio!</span>

          <h1 className="text-5xl font-bold">
            Eu sou um
            <span className="text-blue-700"> Fullstack Developer</span>
          </h1>

          <span className=" my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic officiis quidem quo, minima temporibus soluta voluptate doloribus quisquam voluptatibus, nesciunt voluptas? Soluta, nostrum temporibus. Adipisci veniam commodi dicta. Nihil, ipsum!</span>

          <span className="w-40 h-10 p-0 bg-blue-700 hover:bg-blue-600 text-white font-bold rounded-xl flex justify-center items-center cursor-pointer">
            Curriculo
          </span>

          <div className="my-5">
            <span>Github</span>
            <span>Linkedin</span>
          </div>
        </div>

        <img src={banner} width='600' />
      </div>
    </>
  )
}
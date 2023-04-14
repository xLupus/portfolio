export function AboutPage() {
  return (
    <div className="flex flex-col items-center px-12 py-24 gap-y-10">
      <div className="flex items-center gap-x-6">
        <img src="https://placehold.co/350x500" alt="" />

        <div className="max-w-3xl p-6">
          <div className="grid grid-cols-2 gap-4">
            <span>NOME: Vinicius do Amaral Souza</span>
            <span>TITULO DE TRABALHO: Desenvolvedor Web</span>
            <span>IDADE: 22</span>
            <span>LOCALIZAÇÃO: São Paulo - SP</span>
          </div>

          <hr className="my-5 border-black" />

          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores deserunt reprehenderit atque nam consequatur et corrupti. Expedita omnis, enim sit animi minima, alias ad quasi quia culpa corporis, fugiat magni.</span>
          <br /> <br />

          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aspernatur, atque, architecto delectus veritatis quod ad, iusto quasi hic itaque voluptate in. Nemo placeat sint rem, odit numquam illum nobis.</span>
          <br /> <br />

          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iusto ab maxime repudiandae officiis, quaerat dolores consectetur magnam delectus aliquid? Quaerat nemo iusto distinctio voluptas eos, minima molestiae corrupti quidem?</span>

          <hr className="my-5 border-black" />

          <span className="w-40 h-10 p-0 bg-blue-700 hover:bg-blue-600 text-white font-bold rounded-xl flex justify-center items-center cursor-pointer">
            Curriculo
          </span>
        </div>
      </div>

      <h1 className="font-semibold">O QUE EU FAÇO</h1>

      <div className="flex gap-6">
        <div className="w-96 px-4 py-8 border flex flex-col justify-center items-center shadow-lg">
        <img src="/src/assets/back-end.svg" className="w-20 h-20" alt="" />

          <span className="font-bold my-5">BACKEND</span>

          <span className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, praesentium odit, officia quos ex voluptatum nam illo enim saepe vel aliquam provident omnis qui. Maiores quas consequuntur officia labore iure!</span>
        </div>

        <div className="w-96 px-4 py-8 flex flex-col justify-center items-center shadow-lg">
          <img src="/src/assets/front-end.svg" className="w-20 h-20" alt="" />

          <span className="font-bold my-5">FRONTEND</span>

          <span className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, praesentium odit, officia quos ex voluptatum nam illo enim saepe vel aliquam provident omnis qui. Maiores quas consequuntur officia labore iure!</span>
        </div>
      </div>

      <h1 className="font-semibold">CONHECIMENTOS</h1>

      <div className="flex gap-x-5">
        <div className="flex gap-x-2 items-center">
          <span className="block w-3 h-3 bg-sky-700" /> FORTE
        </div>

        <div className="flex gap-x-2 items-center">
          <span className="block w-3 h-3 bg-green-600" /> CONHECEDOR
        </div>

        <div className="flex gap-x-2 items-center">
          <span className="block w-3 h-3 bg-red-500" /> APREENDENDO
        </div>
      </div>

      <div className="flex gap-4">
        <span className="px-3 py-2 bg-sky-700 text-white rounded">HTML5</span>
        <span className="px-3 py-2 bg-sky-700 text-white rounded">CSS3</span>
        <span className="px-3 py-2 bg-sky-700 text-white rounded">Javascript</span>

        <span className="px-3 py-2 bg-sky-700 text-white rounded">PHP</span>
        <span className="px-3 py-2 bg-sky-700 text-white rounded">Laravel</span>
        <span className="px-3 py-2 bg-green-600 text-white rounded">Node.js</span>
        <span className="px-3 py-2 bg-green-600 text-white rounded">Express.js</span>

        <span className="px-3 py-2 bg-red-500 text-white rounded">React.js</span>

        <span className="px-3 py-2 bg-red-500 text-white rounded">MySQL</span>
        <span className="px-3 py-2 bg-red-500 text-white rounded">MongoDB</span>

        <span className="px-3 py-2 bg-red-500 text-white rounded">API Rest</span>
      </div>
    </div>
  )
}
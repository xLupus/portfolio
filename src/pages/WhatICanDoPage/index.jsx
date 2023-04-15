import backendLogo from '../../assets/back-end.png'
import frontendLogo from '../../assets/front-end.png'

export function WhatICanDoPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center  gap-y-10 h-screen">
        <div className="flex flex-wrap justify-center gap-6">
          <div className="w-96 px-4 py-8 border flex flex-col justify-center items-center shadow-lg">
            <img src={backendLogo} className="w-20 h-20" alt="" draggable='false' />

            <span className="font-bold my-5">BACKEND</span>

            <span className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, praesentium odit, officia quos ex voluptatum nam illo enim saepe vel aliquam provident omnis qui. Maiores quas consequuntur officia labore iure!
            </span>
          </div>

          <div className="w-96 px-4 py-8 border flex flex-col justify-center items-center shadow-lg">
            <img src={frontendLogo} className="w-20 h-20" alt="" draggable='false' />

            <span className="font-bold my-5">FRONTEND</span>

            <span className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, praesentium odit, officia quos ex voluptatum nam illo enim saepe vel aliquam provident omnis qui. Maiores quas consequuntur officia labore iure!
            </span>
          </div>

          <div className="w-96 px-4 py-8 border flex flex-col justify-center items-center shadow-lg">
            <div className='flex gap-x-10'>
              <img src={frontendLogo} className="w-20 h-20" alt="" draggable='false' />
              <img src={backendLogo} className="w-20 h-20" alt="" draggable='false' />
            </div>

            <span className="font-bold my-5">FULLSTACK</span>

            <span className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, praesentium odit, officia quos ex voluptatum nam illo enim saepe vel aliquam provident omnis qui. Maiores quas consequuntur officia labore iure!
            </span>
          </div>
        </div>

        <div className="flex gap-x-5">
          <div className="flex gap-x-2 items-center">
            <span className="block w-3 h-3 bg-green-600 rounded-full" /> CONHECEDOR
          </div>

          <div className="flex gap-x-2 items-center">
            <span className="block w-3 h-3 bg-sky-700 rounded-full" /> FORTE
          </div>

          <div className="flex gap-x-2 items-center">
            <span className="block w-3 h-3 bg-red-500 rounded-full" /> APRENDENDO
          </div>
        </div>

        <div className="max-w-6xl flex gap-4 flex-wrap justify-center">
          <span className="px-3 py-2 bg-sky-700 text-white rounded">HTML5</span>
          <span className="px-3 py-2 bg-sky-700 text-white rounded">CSS3</span>
          <span className="px-3 py-2 bg-sky-700 text-white rounded">Javascript</span>

          <span className="px-3 py-2 bg-green-600 text-white rounded">TailwindCSS</span>
          <span className="px-3 py-2 bg-green-600 text-white rounded">Bootstrap 5</span>

          <span className="px-3 py-2 bg-sky-700 text-white rounded">Node.js</span>
          <span className="px-3 py-2 bg-green-600 text-white rounded">Express.js</span>

          <span className="px-3 py-2 bg-sky-700 text-white rounded">PHP</span>
          <span className="px-3 py-2 bg-sky-700 text-white rounded">Laravel</span>
          <span className="px-3 py-2 bg-green-600 text-white rounded">MySQL</span>

          <span className="px-3 py-2 bg-red-500 text-white rounded">React.js</span>
          <span className="px-3 py-2 bg-red-500 text-white rounded">MongoDB</span>
          <span className="px-3 py-2 bg-red-500 text-white rounded">API Rest</span>
        </div>
      </div>
    </>
  )
}
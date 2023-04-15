export function AboutPage() {
  return (
    <div className="flex flex-col items-center px-6">
      <div className="flex items-center gap-x-8 h-screen">
        <img src="https://placehold.co/400x600" alt="" />

        <div className="max-w-4xl ">
          <div className="grid grid-cols-2 gap-4 font-bold pt-5 border-t border-zinc-400">
            <span>NOME: <span className='font-normal'>Vinicius do Amaral Souza</span></span>
            <span>TITULO DE TRABALHO: <span className='font-normal'>Desenvolvedor Web</span></span>
            <span>IDADE: <span className='font-normal'>22 anos</span></span>
            <span>LOCALIZAÇÃO: <span className='font-normal'>São Paulo - SP</span></span>
          </div>

          <div className='flex flex-col gap-y-2 py-5 my-5 border-y border-zinc-400'>
            <span>
              Olá, meu nome é Vinicius e estou em busca de uma oportunidade para <strong>iniciar minha carreira</strong> como programador. Embora eu ainda não tenha experiência profissional ou trabalho voluntário relacionado à programação, tenho estudado e praticado por conta própria por um período considerável de tempo.
            </span>

            <span>              
              Este portfólio contém alguns projetos que desenvolvi durante meu período de estudos. Cada projeto foi criado com o objetivo de colocar em prática o que tenho aprendido e desafiar minhas habilidades. Sinta-se livre para navegar e explorar cada um deles.
            </span>

            <span>
              Estudo <strong>Sistemas para Internet</strong> no <strong>Centro Universitário Senac</strong>. Almejo me tornar um desenvolvedor competente para atuar tanto no desenvolvimento de recursos por parte do servidor, quanto do cliente.
            </span>

            <span>
              Atualmente tenho focado em aprofundar minhas habilidades como Front-end, por isso venho me aprofundando em Bootstrap, TailwindCSS e no ecosistema Javascript.
            </span>

            <span>
              Estou buscando uma oportunidade para começar minha carreira como <strong>Junior</strong>, em uma empresa onde eu possa aplicar os conhecimentos que venho aprendendo na faculdade e por conta própria, enquanto aprendo com profissionais experientes, contribuo para o sucesso da empresa e desenvolvo continuamente minhas habilidades como desenvolvedor de sistemas.
            </span>

            <span>
              Se você está procurando um profissional <strong>dedicado</strong>, <strong>motivado</strong>, com <strong>desejo de aprender</strong> e crescer na área de programação, eu adoraria conversar com você e explorar maneiras de trabalharmos juntos. Entre em contato comigo para conversar!
            </span>

            <span>
              Obrigado por visitar meu portfólio e por considerar minha candidatura.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
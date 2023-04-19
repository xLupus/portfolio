export function ProjectPage() {
  return (
    <div className="max-w-6xl flex justify-center p-12">
      <div>
        <div className="flex gap-x-5">
          <img src="https://placehold.co/700x500" alt="Teste" />

          <div className="flex flex-col gap-4 h-[500px] overflow-y-scroll" >
            <img src="https://placehold.co/300x200" alt="Teste" />
            <img src="https://placehold.co/300x200" alt="Teste" />
            <img src="https://placehold.co/300x200" alt="Teste" />
            <img src="https://placehold.co/300x200" alt="Teste" />
          </div>
        </div>

        <div className="flex flex-col">
          <span>TECNOLOGIAS:</span>
          <span>
            OBJETIVO:
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente natus libero illum nisi cum eius voluptatibus magnam itaque veritatis, officiis nesciunt iure repellendus minima ea eum molestiae commodi. Odio, sed?</span>
          </span>
          <span>SOBRE:</span>
        </div>
      </div>
    </div>
  )
}
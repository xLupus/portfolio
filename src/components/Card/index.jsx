import { Link } from "react-router-dom"

export function Card(props) {
  const { imageURL, title, description, link } = props

  return (
    <div className=" border shadow-lg">
      <img src={imageURL || "https://placehold.co/350x250"} alt="title" width='100%' />

      <div className="flex flex-col p-3 h-36">
        <span className="font-semibold text-sm mb-2">{title || "TITULO DO PROJETO"}</span>

        <span className="flex-1 text-sm">{description || "A descrição do projeto fica aqui"}</span>


        <Link to={link}>Ver detalhes</Link>
      </div>
    </div>
  )
}
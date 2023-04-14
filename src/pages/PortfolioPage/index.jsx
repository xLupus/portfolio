import { Link } from "react-router-dom";
import { Card } from "../../components/Card";

export function PortfolioPage() {
  return (
    <div className="p-12">
      <h1 className="font-semibold mb-6">PROJETOS</h1>

      <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        <Card 
          imageURL="https://placehold.co/350x250"
          title="TITULO DO PROJETO"
          description="A descrição do projeto fica aqui"
          link={`/projeto/1`}
        />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
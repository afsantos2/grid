import { produtos } from "./Data"
import Button from "./Button"

export default function Produtos() {
  return (
    produtos.map(produto => 
      <li key={produto.id}>
        <div className="card">
          <div className="img-div">
            <img src={produto.img_src} alt={produto.nome} />
          </div>
          <span className="nome">{produto.nome}</span>
          <span className="preco">{produto.preco}</span>
          <Button label="Adicionar ao carrinho" classe="add-carr-btn" />
        </div>
      </li>    
    )
  )   
}
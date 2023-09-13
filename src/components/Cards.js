const produtos = [
  {id: 1, img_src: '/' ,nome: 'Mouse', preco: 'R$20,00' },
  {id: 2, img_src: '/' ,nome: 'Teclado', preco: 'R$50,00' },
  {id: 3, img_src: '/' ,nome: 'Fone Bluetooth', preco: 'R$100,00'},
];

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
        </div>
      </li>    
    )
  )   
}
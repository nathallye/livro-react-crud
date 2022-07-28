import React from "react";
import { Link } from "react-router-dom";

const TabelaLivros = ({ livros }) => { // recebe livros de props, diretamente
  return (
    <div>
      <h1>Tabela de livros</h1>
      {livros.length === 0  // se o tamanho do objeto for igual a 0
      ? (<h2>Nenhum livro encontrado</h2>) // então retorna nenhum livro encontrado
      // caso constrario(o tamanho do objeto seja diferente de 0) será renderizada a tabela com os livros
      : (<table className="tabela"> 
          <thead>
            <tr>
              <th width="17%">ISBN</th>
              <th>Título</th>
              <th>Autor</th>
              <th width="7%"></th>
              <th width="9%"></th>
            </tr>
          </thead>
          <tbody> 
            {/* map vai percorrer cada livro e renderizar as informações de acordo com o acessor de atributos(.)*/}
            {livros.map(livro => (
              <tr>
                <td>{livro.isbn}</td>
                <td>{livro.titulo}</td>
                <td>{livro.autor}</td>
                <td>
                  <button className="botao editar">
                    <Link to={`/editar/${livro.isbn}`}>Editar</Link> {/*Link para a página editar do livro em questão, identificado pelo isbn*/}
                  </button>
                </td>
                <td>
                  <button className="botao remover">Remover</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>)
      }
    </div>
  )
}

export default TabelaLivros;

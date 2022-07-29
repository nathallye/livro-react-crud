import React, { Component } from "react";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route
} from "react-router-dom";
import SimpleStorage from "react-simple-storage";

import Menu from "../components/Menu";
import TabelaLivros from "../components/TabelaLivros";
import CadastrarLivros from "../components/forms/CadastrarLivros";
import NotFound from "../components/NotFound";
import EditarLivros from "../components/routes/EditarLivros";

class App extends Component {

  state = {
    livros: [
      // itens removidos do objeto inicial state para persistência dos dados
      // deixando o objeto state recebendo a chave livros cujo o valor é um array vazio []
      // {
      //   id: 1,
      //   isbn: "978-85-7522-403-8",
      //   titulo: "HTML5 - 2ª Edição",
      //   autor: "Maurício Samy Silva",
      // },
      // {
      //   id: 2,
      //   isbn: "978-85-7522-807-4",
      //   titulo: "Introdução ao Pentest",
      //   autor: "Daniel Moreno",
      // },
      // {
      //   id: 3,
      //   isbn: "978-85-7522-780-8",
      //   titulo: "Internet das Coisas para Desenvolvedores",
      //   autor: "Ricardo da Silva Ogliari",
      // }
    ]
  }

  inserirLivro = (livro) => {
    livro.id = this.state.livros.length + 1;
    this.setState({
      livros: [...this.state.livros, livro] // livros vai receber todo o objeto atual + o livro recebido no parâmetro
    });
  };

  editarLivro = (livro) => {
    const index = this.state.livros.findIndex((p) => p.id === livro.id);
    const livros = this.state.livros
      .slice(0, index)
      .concat(this.state.livros.slice(index + 1));
    const newLivros = [...livros, livro].sort((a, b) => a.id - b.id);
    this.setState({
      livros: newLivros,
    });
  };

  removerLivro = (livro) => {
    if (window.confirm("Você tem certeza que deseja remover esse livro?")) { // se o usuário confirmar que deseja remover o livro
      const livros = this.state.livros.filter(l => l.isbn !== livro.isbn); // a constante livros vai receber o array que o filter vai retornar, ou seja, depois que ele percorrer todos os l e pegar todos que tem o parâmetro isbn diferentes do livro passado
      this.setState({ livros }) // feito isso vamos setar o estado passando o array livros
    }
  };

  render() {
    return (
      <Router >
        <SimpleStorage parent={this} />
        <Menu />
        <Routes>
          <Route exact path="/" 
            element={
            <TabelaLivros 
              livros={this.state.livros} 
              removerLivro={this.removerLivro}
            />}
          />
          <Route exact path="/cadastrar"
            element={
            <CadastrarLivros 
              inserirLivro={this.inserirLivro}
              livro={{id: 0, isbn: "", titulo: "", autor: ""}}
              textoBotao="Cadastrar"
            />}
          />
          <Route exact path="/editar/:isbnLivro" 
            element={<EditarLivros livros={this.state.livros} editarLivro={this.editarLivro}/>}
          />

          <Route path="*"
            element={<NotFound />}
          />
        </Routes>
      </Router>
    );
  }
}

export default App;
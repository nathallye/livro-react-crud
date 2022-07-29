import React from "react";
import { 
  Navigate,
  useParams
} from "react-router-dom";


import CadastrarLivros from "../forms/CadastrarLivros";

// Saída para passagem de função para renderizar componente
// link documentação https://reactrouter.com/docs/en/v6/hooks/use-params
const EditarLivros = (props) => {
  let { isbnLivro } = useParams(); // hook para pegar parametro da url

  const livro = props.livros.find(
    (livro) => livro.isbn === isbnLivro
  );

  if (livro) {
    return (
      <CadastrarLivros 
        editarLivro={props.editarLivro}
        livro={livro}
        textoBotao="Salvar"
      />
    );
  } else {
    return <Navigate to="/" />;
  }
};

export default EditarLivros;
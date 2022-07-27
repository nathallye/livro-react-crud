# React DOM

React é um framework single page application(aplicação de única página).

## Criando o primeiro projeto React

- Dentro da pasta do projeto, vamos rodar o comando:

```
npx create-react-app crud
                     [nome-aplicação]
```

**npx:** Comando que vai se encarregar de baixar uma dependência que vamos usar apenas de forma temporária. Ele baixa essa dependência, executa o que tem que ser executado e depois exclui ela. Desse modo, não instalamos as dependências de forma global, evitando ocupar espaço na máquina. 

**create-react-app:** Dependência para criar um projeto.

- Ou, podemos rodar o comando, para instalar o comando create-reatc-app globalmente na nossa máquina:

```
sudo npm install -g create-react-app
```

- E em seguida podemos usá-lo:

```
create-react-app crud
                 [nome-aplicação]
```

- Observação: A partir da versão 5.0.1, se você já instalou _c_reate-react-app_ globalmente via _npm install -g create-react-app_, recomendamos que você desinstale o pacote usando _npm uninstall -g create-react-app_ ou _yarn global remove create-react-app_ para garantir que npx sempre use a versão mais recente.

- Ao finalizar a criação ele informa no terminal os próximos passos.
Primeiro, entrar na pasta da aplicação:

```
cd crud
   [nome-pasta-aplicação]
```

- Segundo, rodar o comando para iniciar o projeto:

```
npm start ou yarn start
```

Dentro do vscode, podemos notar que foram criados os seguintes diretórios no projeto:

```
node_modules
public
src
```

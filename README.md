## 📚 Livraria Alura Node

> Este repositório é um projeto de primeiros contatos com a tecnologia Node.js e MongoDb. O seu desenvolvimento foi feito baseado no treinamento de Node.js da Alura. Trata-se de uma API de livros e autores onde é possível efetuar o CRUD das entidades. O armazenamento está sendo feito em uma instância em núvem com o auxílio do MongoDB Atlas.

### Principais objetivos
> Aprendizado de Node.js, Javascript e MongoDb.

### Tecnologias envolvidas
- ***JavaScript*** e ***Node*** como linguagem e ambiente de execução;
- ***Biblioteca Nodemon*** para fazer o auto-reload do projeto a cada alteração;
- ***MongoDB*** e ***MongoDb Atlas*** como banco de dados e servidor de banco em núvem;
- ***Biblioteca Mongoose*** para trabalhar com MongoDb no Node.js;

### Como executar o projeto
* Clone o projeto;
* Execute o comando **npm install** para instalar as dependências do projeto
* Execute o comando **npm run dev** para iniciar o servidor do projeto com o nodemon (biblioteca que monitora as alterações nos arquivos do projeto para fazer o live-reload);

### Utilizando a API
**Postman:** Na pasta ***postman*** dentro do repositório, pode ser encontrada uma collection que facilita o uso da API, pois contem todas as suas chamadas e exemplos. Para utilizá-la basta fazer a importação dentro do Postman e, em seguida, criar um environment (ex.: Livraria Alura Node) e adicionar a variável **localServer** com o endereço da sua API. Depois, ao executar os requests da collection, selecione o environment onde a variável foi criada.

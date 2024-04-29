API de Cadastros de Bruxos e VArinhas. Esta é uma API simples para gerenciar cadastros de bruxos e varinhas. Ela permite buscar, criar, editar e deletar as varinhas e os bruxos em um banco de dados PostgreSQL.

Tecnologias Utilizadas

    - Node.js: Plataforma de execução de código JavaScript.
    - Express.js: Framework web para Node.js que facilita a criação de APIs.
    - PostgreSQL: Banco de dados relacional utilizado para armazenar os dados dos bruxos e varinhas.

A API possui as seguintes rotas:

    - Bruxos
    GET /bruxos: Retorna todos os bruxos cadastrados.
    GET /bruxos/:id: Retorna um bruxo específico com base no ID fornecido.
    POST /bruxos: Cria um novo bruxo com os dados fornecidos no corpo da requisição.
    PUT /bruxos/:id: Atualiza os dados de um bruxo existente com base no ID fornecido.
    DELETE /bruxos/:id: Deleta um bruxo existente com base no ID fornecido.

    - Varinhas
    GET /varinhas: Retorna todos as varinhas cadastradas.
    GET /varinhas/:id: Retorna uma varinha específico com base no ID fornecido.
    POST /varinhas: Cria uma noao varinha com os dados fornecidos no corpo da requisição.
    PUT /varinhas/:id: Atualiza os dados de uma varinha existente com base no ID fornecido.
    DELETE /varinhas/:id: Deleta uma varinha existente com base no ID fornecido.
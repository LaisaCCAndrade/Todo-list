# Todo List Application

Este é um projeto de lista de tarefas (todo list) desenvolvido com um backend em ASP.NET Core, um frontend em Ionic com Angular e um banco de dados SQL Server.

## Tecnologias Utilizadas

- **Frontend**: Ionic, Angular, TypeScript
- **Backend**: ASP.NET Core, Entity Framework, SQL Server
- **Banco de Dados**: SQL Server

## Requisitos

Antes de iniciar o projeto, certifique-se de ter os seguintes requisitos instalados:

- [.NET SDK 8.0](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
- [SQL Server Management Studio (SSMS)](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms)

## Configuração do Backend

1. **Clone o Repositório:**

   ```bash
   git clone https://github.com/LaisaCCAndrade/Todo-list.git
   cd seu-repositorio

2. **Restaurar Pacotes:**

   ```bash
    cd Backend
    dotnet restore

3. **Configurar o Banco de Dados:**

   - Crie um banco de dados no SQL Server.

   - Atualize a string de conexão no arquivo appsettings.json com a conexão do seu banco de dados.
  
4. **Aplicar Migrations:**

   Crie e aplique as migrations para criar as tabelas necessárias:

      ```bash
       dotnet ef migrations add InitialCreate
       dotnet ef database update

5. **Executar o Backend:**

   Inicie o backend:

     ```bash
      dotnet run


## Configuração do Frontend

1. **Instalar Dependências:**

   Navegue até a pasta do frontend e instale as dependências:

   ```bash
    cd Frontend
    npm install

2. **Configurar API Endpoint:**

   - Crie um banco de dados no SQL Server.

   - Atualize a string de conexão no arquivo appsettings.json com a conexão do seu banco de dados.
  
3. **Aplicar Migrations:**

   Atualize o endpoint da API no arquivo src/app/Service/todo.service.ts para apontar para o seu backend:


4. **Executar o Frontend:**

   Inicie o frontend:

     ```bash
      ionic serve

# 🚀 Poll Pulse

Bem-vindo ao **Poll Pulse**! Este é um projeto simples, que utiliza **Node.js**, **TypeScript**, **Docker**, **PostgreSQL**, **Redis** e **WebSocket**. Para garantir que o projeto funcione corretamente, é essencial seguir todas as orientações na seção "Como Executar". Vamos começar!

## 🛠️ Tecnologias Utilizadas

- **Node.js e TypeScript**: A base da nossa aplicação.
- **Docker**: Facilitando a configuração e implantação.
- **PostgreSQL e Redis**: Armazenando nossos dados e caches.
- **WebSocket**: Permitindo comunicação em tempo real.
- **Prisma e Prisma Studio**: Modelando e validando nossos dados.
- **Fastify**: Gerenciando nosso servidor HTTP e rotas.
- **Fastify/Cookie**: Gerenciando os cookies dos usuários.
- **Hoppscotch.io**: Uma plataforma de desenvolvimento de API de código aberto que permite testar e validar as funcionalidades do cliente de maneira eficiente e intuitiva.

## 🎯 Funcionalidades

- **Criação de Enquetes**: Crie suas enquetes de forma rápida e fácil!
- **Votação Única**: Cada usuário tem direito a um voto por sessão.
- **Atualização de Voto**: Mudou de ideia? Sem problemas! Seu voto anterior será substituído pelo novo.

## 🚦 Rotas

- **createPoll** `POST /polls`: Crie uma nova enquete.
- **getPoll** `GET /polls/:pollId`: Obtenha os detalhes de uma enquete específica.
- **voteOnPoll** `POST /polls/:pollId/votes`: Vote em uma enquete específica.
- **pollResults** `GET /polls/:pollId/results`: Obtenha os resultados de uma enquete específica, com a quantidade de votos para cada alternativa calculada a partir do banco de dados Redis.

## 🚀 Como Executar

1. Clone o repositório com `git clone`.
2. Entre na pasta do projeto com `cd poll-pulse`.
3. Instale as dependências com `npm install`.
4. Inicie o servidor com `npm run dev`. Você deve ver a seguinte mensagem no terminal, indicando que o servidor está funcionando corretamente:

   ```
   poll-pulse@1.0.0 dev
   > nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/http/server.ts

   [nodemon] 3.1.0
   [nodemon] to restart at any time, enter `rs`
   [nodemon] watching path(s): src/**/*.ts
   [nodemon] watching extensions: ts,json
   [nodemon] starting `ts-node src/http/server.ts`
   HTTP Server is running!
   ```

**Nota**: Este projeto usa Docker. Certifique-se de ter o Docker instalado e configurado corretamente antes de tentar executar o projeto.

### 🐳 Instruções para o Docker

Antes de tudo, certifique-se de que o Docker e o Docker Compose estão instalados em sua máquina.

####  No macOS:

- Para abrir o Docker, use o comando `open -a Docker` no terminal.
- No diretório raiz do projeto, execute o comando `docker-compose up` para configurar e iniciar todos os serviços do Docker.
- Para iniciar todos os containers, use o comando `docker start $(docker ps -a -q)`.
- Para listar todos os containers, use o comando `docker ps -a`.

#### 🐧 No Linux:

- Para abrir o Docker, não é necessário um comando específico. Basta garantir que o serviço Docker esteja em execução.
- No diretório raiz do projeto, execute o comando `docker-compose up` para configurar e iniciar todos os serviços do Docker.
- Para iniciar todos os containers, use o comando `docker start $(docker ps -a -q)`.
- Para listar todos os containers, use o comando `docker ps -a`.

#### 🪟 No Windows:

- Para abrir o Docker, inicie o Docker Desktop a partir do menu Iniciar ou da barra de tarefas.
- No diretório raiz do projeto, execute o comando `docker-compose up` para configurar e iniciar todos os serviços do Docker.
- Para iniciar todos os containers, use o comando `docker start $(docker ps -a -q)`.
- Para listar todos os containers, use o comando `docker ps -a`.

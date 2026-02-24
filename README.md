🌤️ WeatherPro — Weather Dashboard Application

Aplicação web de consulta climática desenvolvida com JavaScript, Node.js e Express, consumindo dados da API da OpenWeatherMap.

O projeto foi estruturado com separação entre frontend e backend, utilizando variáveis de ambiente para proteger a chave da API.

🚀 Demonstração

🔎 Busca por cidade
🌡️ Exibição de temperatura atual
💨 Vento
💧 Umidade
🌡 Sensação térmica
⏱️ Atualização em tempo real
📅 Previsão por hora

🛠️ Tecnologias Utilizadas
Frontend

HTML5

CSS3

JavaScript (Vanilla JS)

Fetch API

Backend

Node.js

Express

CORS

Dotenv

API Externa

OpenWeatherMap

📂 Estrutura do Projeto
weather-app/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env (não versionado)
│
├── frontend/
│   ├── index.html
│   ├── js/app.js
│   └── styles/style.css
│
└── README.md

🔐 Segurança

A chave da API é protegida por meio de variável de ambiente (.env), que está incluída no .gitignore, evitando exposição no repositório público.

⚙️ Como Executar Localmente
1️⃣ Clonar o repositório
git clone <url-do-repositorio>
2️⃣ Instalar dependências do backend
cd backend
npm install
3️⃣ Criar arquivo .env dentro da pasta backend
API_KEY=sua_chave_aqui
4️⃣ Rodar o servidor
node server.js
Servidor disponível em: http://localhost:3000
5️⃣ Abrir o frontend

Abra o arquivo:

frontend/index.html

ou utilize a extensão Live Server no VS Code.

🌍 Funcionalidades

✔️ Consulta por cidade
✔️ Tratamento de erros
✔️ Loading dinâmico
✔️ Consumo simultâneo de múltiplos endpoints (Promise.all)
✔️ Backend intermediador para proteger a chave da API

📈 Melhorias Futuras

🌎 Geolocalização automática

📅 Previsão de 7 dias

🌗 Alternância de tema (dark/light)

📱 Responsividade aprimorada

🚀 Deploy em produção

👩🏻‍💻 Autora

Aline Sávia Nascimento Silva Lima

Desenvolvedora em formação

Estudante de Tecnologia em Sistemas para Internet

Experiência em APIs REST e organização de projetos full stack

✨ Diferenciais Técnicos

Este projeto foi estruturado seguindo boas práticas:

Separação de responsabilidades (frontend/backend)

Proteção de credenciais

Versionamento organizado

Tratamento de erros no backend

Estrutura preparada para deploy
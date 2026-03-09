# WeatherPro — Aplicação de Painel Climático

Aplicação web de consulta climática desenvolvida com JavaScript, Node.js e Express, consumindo dados da API da OpenWeatherMap.

O projeto foi estruturado com separação entre frontend e backend, utilizando variáveis de ambiente para proteger a chave da API.

## Funcionalidades Principais

O WeatherPro oferece uma interface intuitiva para acessar dados meteorológicos, incluindo:

*   Busca de informações climáticas por nome da cidade.
*   Exibição da temperatura atual, sensação térmica, velocidade do vento e umidade.
*   Atualização dos dados em tempo real.
*   Previsão do tempo para as próximas horas.
*   Tratamento de erros para buscas inválidas e um indicador de carregamento dinâmico para melhor experiência do usuário.

## Tecnologias Utilizadas

**Frontend:**
*   HTML5
*   CSS3
*   JavaScript (Vanilla JS)
*   Fetch API

**Backend:**
*   Node.js
*   Express
*   CORS
*   Dotenv

**API Externa:**
*   OpenWeatherMap

## Estrutura do Projeto

O projeto está organizado da seguinte forma para manter a clareza e a manutenibilidade:

```
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
```

## Segurança

A chave da API da OpenWeatherMap é um dado sensível. Para protegê-la, ela é armazenada em um arquivo `.env` na pasta do backend. Este arquivo está listado no `.gitignore`, garantindo que nunca seja enviado para o repositório público.

## Como Executar Localmente

Para executar o projeto em seu ambiente local, siga estes passos:

1.  **Clonar o repositório:**
    ```bash
    git clone <url-do-repositorio>
    ```
2.  **Instalar dependências do backend:**
    Navegue até a pasta `backend` e execute o comando:
    ```bash
    cd backend
    npm install
    ```
3.  **Configurar a chave da API:**
    Ainda na pasta `backend`, crie um arquivo chamado `.env` e adicione sua chave da API da OpenWeatherMap:
    ```
    API_KEY=sua_chave_aqui
    ```
4.  **Iniciar o servidor backend:**
    ```bash
    node server.js
    ```
    O servidor estará disponível em `http://localhost:3000`.

5.  **Abrir o frontend:**
    Abra o arquivo `frontend/index.html` em seu navegador. Você também pode usar uma extensão como o Live Server no VS Code para uma melhor experiência de desenvolvimento.

## Melhorias Futuras

Existem planos para adicionar novas funcionalidades ao projeto, como:

*   Geolocalização para buscar automaticamente o clima da localização do usuário.
*   Previsão do tempo estendida para os próximos 7 dias.
*   Alternância entre temas claro (light) e escuro (dark).
*   Melhorias na responsividade para uma melhor visualização em dispositivos móveis.
*   Deploy da aplicação em um ambiente de produção.

## Autora

**Aline Sávia Nascimento Silva Lima**

*   Desenvolvedora em formação
*   Estudante de Tecnologia em Sistemas para Internet
*   Experiência em APIs REST e organização de projetos full stack

## Diferenciais Técnicos

Este projeto foi desenvolvido com foco em boas práticas de engenharia de software:

*   **Separação de Responsabilidades:** O código do frontend e do backend são mantidos em pastas separadas, facilitando a manutenção e o desenvolvimento.
*   **Proteção de Credenciais:** As chaves de API são mantidas fora do controle de versão.
*   **Versionamento Organizado:** O uso do Git segue um fluxo de trabalho claro.
*   **Tratamento de Erros:** O backend possui tratamento para responder adequadamente a requisições inválidas.
*   **Estrutura Escalável:** A arquitetura do projeto está preparada para futuras expansões e para o deploy em produção.
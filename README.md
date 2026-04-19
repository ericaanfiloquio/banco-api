# Banco API - Automated Tests

## 📌 About the Project

This repository contains automated tests for a REST API focused on
banking operations.

⚠️ **Important:**\
- The **API under test** is hosted in a separate repository:\
👉 https://github.com/ericaanfiloquio/banco-api-app

-   This repository contains **only the automated tests** for that API:\
    👉 https://github.com/ericaanfiloquio/banco-api

The goal is to validate the API's behavior, ensuring that business
rules, status codes, and responses are working correctly.

------------------------------------------------------------------------

## 🔗 Related Repositories

-   🧩 **API (Application):**\
    https://github.com/ericaanfiloquio/banco-api-app

-   🧪 **Automated Tests (this repository):**\
    https://github.com/ericaanfiloquio/banco-api

------------------------------------------------------------------------

## 🎯 Objective

-   Contribute with API quality through automated testing\
-   Validate business rules\
-   Quickly detect failures\
-   Generate detailed test execution reports

------------------------------------------------------------------------

## 🛠️ Tech Stack

-   **JavaScript**
-   **Node.js**
-   **Mocha**
-   **Chai**
-   **Supertest**
-   **Mochawesome**

------------------------------------------------------------------------

## 📁 Project Structure

banco-api/
│
├── test/                # Testes automatizados (Mocha + Supertest)
│   ├── mochawesome/     # Relatórios gerados pelos testes
│   └── *.test.js        # Arquivos de teste
│
├── node_modules/        # Dependências do projeto
│
├── .env                 # Variáveis de ambiente
├── .gitignore           # Arquivos ignorados pelo Git
│
├── package.json         # Configurações e scripts do projeto
├── package-lock.json    # Controle de versões das dependências
│
└── README.md            # Documentação do projeto

------------------------------------------------------------------------

## ⚙️ Environment Variables

Create a `.env` file:

BASE_URL=http://localhost:3000

------------------------------------------------------------------------

## 🚀 Installation & Setup

### Run API

git clone https://github.com/ericaanfiloquio/banco-api-app.git cd
banco-api-app 
npm install 
npm start

### Run Tests

git clone https://github.com/ericaanfiloquio/banco-api.git cd banco-api
npm install 
npm test

------------------------------------------------------------------------

## 📊 Reports

Reports are generated in the `/mochawesome` folder.

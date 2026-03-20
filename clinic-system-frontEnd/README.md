# Saúde Mania - Aplicativo do Paciente

O **Saúde Mania** é um aplicativo móvel desenvolvido para facilitar a vida dos pacientes, permitindo que gerenciem sua saúde de forma integrada e digital. Com ele, usuários podem agendar consultas e exames, visualizar resultados, controlar medicamentos e muito mais.

## ✨ Funcionalidades

*   🔐 **Autenticação de Usuário:** Sistema completo de Login, Cadastro e Recuperação de senha.
*   📅 **Agendamento Online:** Marque consultas e exames de forma rápida e fácil.
*   📊 **Resultados de Exames:** Acesse seu histórico e os resultados de exames diretamente no app.
*   💊 **Controle de Medicamentos:** Gerencie os medicamentos prescritos, horários e doses.
*   🤖 **Chatbot Assistente:** Tire dúvidas e receba orientações do nosso assistente virtual com IA.
*   👤 **Perfil de Usuário:** Visualize e edite suas informações pessoais e de saúde.
*   📄 **Planos de Saúde:** Consulte informações sobre os planos disponíveis.
*   ⚙️ **Configurações:** Personalize a experiência no aplicativo.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

*   [React Native](https://reactnative.dev/)
*   [Expo](https://expo.dev/)
*   [TypeScript](https://www.typescriptlang.org/)
*   [Expo Router](https://docs.expo.dev/router/introduction/) para navegação.
*   [React Hook Form](https://react-hook-form.com/) para gerenciamento de formulários.
*   [Reanimated](https://docs.swmansion.com/react-native-reanimated/) para animações de alta performance.

## 🏁 Começando

Siga as instruções abaixo para configurar e rodar o projeto em seu ambiente de desenvolvimento local.

### Pré-requisitos

*   [Node.js](https://nodejs.org/en/) (versão LTS recomendada)
*   [Yarn](https://classic.yarnpkg.com/en/docs/install)
*   [Expo Go](https://expo.dev/go) instalado em seu dispositivo móvel (Android ou iOS).
*   Um backend rodando localmente nas portas `3000` (API principal) e `8000` (Chatbot), conforme configurado nos hooks.

### Instalação

1.  Clone o repositório:
    ```sh
    git clone git@github.com:ClinicHealthCareSystem/FrontEnd.git
    ```
2.  Navegue até o diretório do projeto:
    ```sh
    cd FrontEnd
    ```
3.  Instale as dependências:
    ```sh
    yarn install
    ```
4.  Configure as variáveis de ambiente. Crie um arquivo `.env` na raiz do projeto a partir do exemplo:
    ```sh
    cp .env.example .env
    ```
    Em seguida, preencha o arquivo `.env` com as URLs da sua API. Exemplo:
    ```
    API_URL=http://localhost:3000
    BOT_URL=http://localhost:8000
    ```
    *(Observação: Atualmente as URLs estão fixas no código. O ideal é refatorar os hooks para usar estas variáveis).*

### Executando o Aplicativo

1.  Inicie o servidor de desenvolvimento do Metro:
    ```sh
    yarn start
    ```
2.  Um QR code aparecerá no seu terminal. Escaneie este QR code com o aplicativo **Expo Go** no seu celular.

## 📂 Estrutura do Projeto

A estrutura de pastas do projeto está organizada da seguinte forma:

```
FrontEnd/
├── src/
│   ├── animations/   # Animações Lottie
│   ├── app/          # Definições de rotas (Expo Router)
│   ├── assets/       # Imagens, fontes e outros arquivos estáticos
│   ├── components/   # Componentes React reutilizáveis
│   ├── global/       # Estilos e configurações globais
│   ├── hooks/        # Hooks customizados (ex: useLogin)
│   ├── screens/      # Telas principais do aplicativo
│   ├── styles/       # Arquivos de estilo para componentes e telas
│   └── utils/        # Funções utilitárias (validações, máscaras)
├── .env.example      # Exemplo de arquivo de variáveis de ambiente
├── babel.config.js   # Configuração do Babel
├── package.json      # Dependências e scripts do projeto
└── tsconfig.json     # Configuração do TypeScript
```

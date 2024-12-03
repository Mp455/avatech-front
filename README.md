# Avatech Auth Frontend

Este é o frontend da aplicação **Avatech Auth**, responsável por fornecer a interface de autenticação de usuários, incluindo registro, login e acesso a rotas protegidas.

---

## Tecnologias Utilizadas

- **Next.js**: Framework para React, utilizado para criar o frontend.
- **TypeScript**: Linguagem de programação que adiciona tipagem estática ao JavaScript.
- **Tailwind CSS**: Framework CSS para estilização.
- **React Hook Form**: Biblioteca para gerenciamento de formulários e validação de campos.
- **Axios**: Cliente HTTP para fazer requisições à API backend.
- **JWT (JSON Web Tokens)**: Utilizado para autenticação e autorização de usuários.

---

## Instalação

1. Clone o repositório.
2. Navegue até o diretório do projeto.
3. Instale as dependências do projeto.
4. Inicie o servidor localmente.

O frontend estará acessível em `http://localhost:3000`.

---

## Configuração de Ambiente

Crie um arquivo `.env.local` na raiz do projeto e adicione as variáveis de ambiente necessárias para se conectar ao backend:

- **NEXT_PUBLIC_API_URL**: A URL do seu backend. Durante o desenvolvimento local, use `http://localhost:3333`. Para produção, use a URL do backend em ambiente de produção (ex: `https://avatech-backend.onrender.com`).

---

## Páginas e Funcionalidades

### **Página de Registro (`/register.tsx`)**

A página de registro permite que novos usuários se registrem no sistema. Ela coleta as informações do usuário e as envia para o backend.

- **Campos**:
  - Nome de usuário
  - E-mail
  - Senha

A validação é feita utilizando **React Hook Form** e os dados são enviados para a API de registro do backend.

### **Página de Login (`/login.tsx`)**

A página de login permite que usuários registrados acessem suas contas. Ela solicita o e-mail e a senha para autenticação.

- **Campos**:
  - E-mail
  - Senha

Após a autenticação bem-sucedida, um token JWT é recebido e armazenado no **localStorage** para ser utilizado nas próximas requisições.

### **Página Protegida (`/protected.tsx`)**

Esta página é protegida e só pode ser acessada se o usuário estiver autenticado. Um token JWT válido deve ser enviado no cabeçalho da requisição para acessar esta página.

---

## Requisições à API

### **Registro de Usuário**

**POST** `/register`

- **Body**:

```json
{
  "username": "nome_do_usuario",
  "email": "email_do_usuario",
  "password": "senha_do_usuario"
}
```

### **Login de Usuário**

**POST** `/login`

- **Body**:

```json
{
  "email": "email_do_usuario",
  "password": "senha_do_usuario"
}
```

### **Acesso a Página Protegida**

**GET** `/protected`

- **Body**:

```json
{
  "email": "email_do_usuario",
  "password": "senha_do_usuario"
}
```

### **Estilização com Tailwind CSS**

Este projeto utiliza o Tailwind CSS para estilização, um framework utilitário que permite aplicar classes diretamente no HTML para personalizar os estilos.

Para mais informações sobre o uso do Tailwind, consulte a documentação oficial.

## Deploy na Vercel

O frontend da aplicação **Avatech Auth** foi implantado na Vercel, garantindo fácil acesso e escalabilidade. A Vercel oferece integração contínua e deploy automático sempre que alterações são feitas no repositório.

A aplicação pode ser acessada através do seguinte link:

- [https://avatech-front.vercel.app](https://avatech-front.vercel.app)

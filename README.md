
# 📘 AngularBlog

Projeto desenvolvido com [Angular CLI](https://angular.io/cli), versão **14.1.2**.  
Este blog foi criado com o objetivo de praticar conceitos do Angular, como componentes, serviços, rotas e organização de pastas.

🔗 Repositório no GitHub: [github.com/leoamff/angular-blog](https://github.com/leoamff/angular-blog)

---

## 🚀 Como rodar o projeto

### 📥 1. Clonar o repositório e instalar dependências

```bash
git clone https://github.com/leoamff/angular-blog.git
cd angular-blog
npm install
```

### 🔧 2. Iniciar o servidor de desenvolvimento

```bash
ng serve
```

Depois, acesse no navegador:  
👉 [http://localhost:4200](http://localhost:4200)

> O projeto será recarregado automaticamente ao salvar qualquer alteração nos arquivos fonte.

---

## ⚙️ Comandos úteis do Angular CLI

### ✨ Gerar estruturas

```bash
ng generate component nome-do-componente
ng generate service nome-do-servico
ng generate module nome-do-modulo
ng generate directive nome-da-diretiva
ng generate pipe nome-do-pipe
```

Atalhos:

```bash
ng g c nome         # componente
ng g s nome         # serviço
ng g m nome         # módulo
ng g d nome         # diretiva
ng g p nome         # pipe
```

---

## 🏗️ Build do projeto

Para compilar o projeto para produção:

```bash
ng build
```

Os arquivos gerados serão armazenados na pasta `dist/`.

---

## ✅ Testes

### 🧪 Testes unitários

Execute os testes unitários utilizando o Karma:

```bash
ng test
```

### 🧪 Testes End-to-End (E2E)

Para executar testes de ponta a ponta:

```bash
ng e2e
```

> ⚠️ É necessário instalar um pacote de suporte a testes E2E (como [Cypress](https://www.cypress.io/) ou Protractor).

---

## 💡 Funcionalidades

- [x] Estrutura modular com Angular
- [x] Navegação entre páginas com rotas
- [x] Componentes reutilizáveis
- [x] Organização de código escalável
- [ ] Integração com API (em desenvolvimento)
- [ ] Sistema de autenticação (em breve)

---

## 🗂️ Estrutura de pastas (exemplo)

```
angular-blog/
├── src/
│   ├── app/
│   │   ├── components/     # Componentes reutilizáveis
│   │   ├── pages/          # Páginas principais do blog
│   │   ├── services/       # Serviços e lógica de negócio
│   │   └── app.module.ts   # Módulo raiz
│   └── assets/             # Imagens e arquivos estáticos
```

---

## 🧠 Dicas

Para ajuda com comandos do Angular CLI:

```bash
ng help
```

Ou acesse a [documentação oficial do Angular CLI](https://angular.io/cli).

---

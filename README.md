# 💰 Finance Bot

Assistente financeiro inteligente desenvolvido com **React + Spring Boot**, permitindo registrar gastos utilizando linguagem natural.

O objetivo do projeto é transformar mensagens simples como:

```text
gastei 50 no ifood
```

em registros financeiros automáticos, organizados por categoria e acompanhados de totais mensais em tempo real.

---

# 🚀 Preview

## ✨ Interface moderna

* Dashboard estilo fintech
* Tema dark moderno
* Integração fullstack
* Comunicação em tempo real com API Java

---

# 🧠 Como funciona

O usuário digita uma mensagem natural no frontend.

Exemplo:

```text
gastei 60 de gasolina
```

O backend:

* interpreta a frase
* identifica valor
* categoriza automaticamente
* salva no banco
* retorna resposta inteligente

---

# ⚙️ Tecnologias utilizadas

## Frontend

* React
* Vite
* Tailwind CSS

## Backend

* Java 21
* Spring Boot
* Spring Web
* Spring Data JPA

## Banco de dados

* H2 Database

---

# 🏗️ Arquitetura

```text
React Frontend
       ↓
Spring Boot API
       ↓
Banco de Dados
```

---

# ✨ Funcionalidades

✅ Registro de gastos via texto
✅ Categorização automática
✅ Soma mensal por categoria
✅ API REST integrada
✅ Frontend moderno responsivo
✅ Comunicação frontend/backend em tempo real

---

# 📸 Exemplo de resposta

```text
Anotei aqui 👍
💸 Gasto: R$ 60,00 (transporte)
📊 Total no mês: R$ 140,00
```

---

# ▶️ Como executar

## 🔥 Backend

```bash
mvn spring-boot:run
```

Backend roda em:

```text
http://localhost:8081
```

---

## 🎨 Frontend

```bash
npm install
npm run dev
```

Frontend roda em:

```text
http://localhost:5173
```

---

# 🔌 Integração API

O frontend envia mensagens para:

```text
POST /webhook
```

---

# 📈 Próximas evoluções

* [ ] Login e autenticação JWT
* [ ] PostgreSQL
* [ ] Dashboard com gráficos
* [ ] Histórico de transações
* [ ] Deploy completo
* [ ] Integração com WhatsApp
* [ ] IA para categorização avançada

---

# 💡 Motivação

Este projeto foi criado com foco em aprendizado prático de desenvolvimento fullstack, integração de APIs e construção de soluções reais utilizando Java + React.

---

# 👨‍💻 Autor

Desenvolvido por Alvaro Neto 🚀

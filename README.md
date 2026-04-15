# Mini REST API - Technical Test Submission

## Candidate
**Aries Pujie Prasetio**

Submission for **Tech Lead Technical Test**

---

# Project Overview

This project is a simple REST API for a task management system (Todo API) built using:

- Node.js
- TypeScript
- Express.js
- PostgreSQL
- Prisma ORM
- Zod Validation
- Jest + Supertest

The API supports full CRUD operations, input validation, database migration, seed data, and unit testing.

---

# Features

## Todo Management

- Create Todo
- Get All Todos
- Get Todo by ID
- Update Todo
- Delete Todo

## Validation

Request payload validation using Zod.

## Database

- PostgreSQL database
- Prisma migration
- Seed sample data

## Testing

3 unit tests implemented using Jest and Supertest.

---

# Tech Stack

| Layer | Technology |
|------|------------|
| Runtime | Node.js |
| Language | TypeScript |
| Framework | Express.js |
| Database | PostgreSQL |
| ORM | Prisma |
| Validation | Zod |
| Testing | Jest |
| HTTP Test | Supertest |

---

# Project Structure

```text
techlead-test/
│
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
│
├── src/
│   ├── lib/
│   │   └── prisma.ts
│   │
│   ├── routes/
│   │   └── todo.routes.ts
│   │
│   ├── validations/
│   │   └── todo.schema.ts
│   │
│   ├── app.ts
│   └── server.ts
│
├── tests/
│   └── todo.test.ts
│
├── package.json
├── tsconfig.json
└── README.md
```

---

# Installation & Setup

## 1. Clone Repository

```bash
git clone <https://github.com/ariespujieprasetio/dsg-techlead-test.git>
cd techlead-test
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Environment Variables

Create `.env` file:

```env
DATABASE_URL="postgresql://rizalnurfaizi@localhost:5432/todo_db"
PORT=3000
```

---

## 4. Run Migration

```bash
npx prisma migrate dev --name init
```

---

## 5. Seed Sample Data

```bash
npm run seed
```

---

## 6. Run Application

```bash
npm run dev
```

Server will run at:

```text
http://localhost:3000
```

---

# API Endpoints

## Base URL

```text
http://localhost:3000/api/todos
```

---

## 1. Create Todo

### Request

```http
POST /api/todos
```

### Body

```json
{
  "title": "Learn Node.js",
  "description": "Build REST API project"
}
```

---

## 2. Get All Todos

```http
GET /api/todos
```

---

## 3. Get Todo By ID

```http
GET /api/todos/:id
```

Example:

```http
GET /api/todos/1
```

---

## 4. Update Todo

```http
PATCH /api/todos/:id
```

### Body Example

```json
{
  "completed": true
}
```

---

## 5. Delete Todo

```http
DELETE /api/todos/:id
```

---

# Validation Rules

## Create Todo

- `title` is required
- `title` must not be empty

## Update Todo

Optional fields:

- `title`
- `description`
- `completed`

---

# Running Tests

```bash
npm test
```

### Implemented Tests

1. Should create todo successfully
2. Should reject invalid payload
3. Should get todo list successfully

---

# Technical Decisions

## Why Express.js?

Simple, lightweight, fast to develop, and widely used for REST APIs.

## Why Prisma?

- Fast development
- Type-safe ORM
- Easy migration system
- Clean query syntax

## Why Zod?

Lightweight schema validation with strong TypeScript support.

## Why PostgreSQL?

Reliable relational database with strong production usage.

---

# Assumptions

- No authentication required
- Single user environment
- Basic task management only
- Pagination not required unless requested

---

# Improvements If Extended

Given more time, the following enhancements would be added:

- Controller + Service layer separation
- Global error handling middleware
- Standardized API response format
- Swagger / OpenAPI documentation
- Pagination & filtering
- Docker support
- CI/CD pipeline
- Logging & monitoring
- Soft delete support

---

# Development Time

## Start Time
13:10 WIB

## End Time
17:45 WIB

---

# Final Notes

This project was built with focus on:

- Clean structure
- Readability
- Maintainability
- Simplicity
- Production-ready foundation

Thank you for reviewing my submission.

---

# Candidate

**Aries Pujie Prasetio**
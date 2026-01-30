# Team JAR – Rendering Strategy Explanation
---

# 🌍 Transparent Contribution Platform

**Sprint #1 – Simulated Work | Full-Stack Development with Next.js & Cloud**

---

## 📌 Problem Statement

NGOs and open-source contributors often **duplicate work** because there is **poor visibility into ongoing efforts**. Contributors don’t know:

* What tasks are already in progress
* Who is working on what
* Whether a similar solution already exists

This leads to wasted time, fragmented efforts, and slow impact.

### 💡 Our Goal

To build a **collaborative platform** that makes contribution pipelines:

* **Transparent** – everyone can see ongoing and completed work
* **Reusable** – contributors can build on existing solutions
* **Scalable** – supports growth across teams and organizations

This repository represents **Sprint #1**, where we set up the **complete full-stack architecture** used in modern production-grade applications.

---

## 🧠 Big Picture – Full-Stack Architecture

A full-stack application means owning the **entire product lifecycle**:

* **Frontend** – User Interface & Experience
* **Backend** – Business logic & APIs
* **Database** – Persistent data storage
* **Infrastructure** – Deployment, scaling, and reliability

We use **JavaScript & TypeScript across the stack**, mirroring real industry workflows.

### 🔗 Technology Pipeline

```
Next.js (Frontend + API)
        ↓
Prisma ORM
        ↓
PostgreSQL Database
        ↓
Redis (Caching Layer)
        ↓
Docker (Containerization)
        ↓
AWS / Azure (Cloud Deployment)
```

---

## ⚙️ Tech Stack Overview

### 🖥️ Frontend & Backend – Next.js

Next.js is the **core of our stack**. Unlike plain React, it enables:

* UI rendering
* Backend APIs
* Server-side logic
  all in **one unified codebase**.

#### Key Features Used

* **App Router** – File-based routing for pages & APIs
* **API Routes** – Backend endpoints inside Next.js
* **Server Components** – Improved performance & SEO
* **Static Generation & SSR** – Hybrid rendering strategies
* **TypeScript Support** – Type safety and better DX

📚 Learn More:

* Official Docs: [https://nextjs.org/docs](https://nextjs.org/docs)
* Full Course: *Next.js 15 for Beginners*

---

### 🗄️ Database – PostgreSQL

PostgreSQL is a **powerful open-source relational database** used in production by startups and enterprises.

Why PostgreSQL?

* Strong data integrity
* Advanced querying
* Reliable and scalable

📚 Resources:

* [https://www.postgresql.org/docs/](https://www.postgresql.org/docs/)

---

### 🔗 ORM – Prisma

Prisma acts as the **bridge between TypeScript and PostgreSQL**.

Benefits:

* Type-safe database queries
* Auto-generated models
* Cleaner and more readable code
* Reduced runtime errors

📚 Resources:

* [https://www.prisma.io/docs](https://www.prisma.io/docs)

---

### ⚡ Caching Layer – Redis

Redis is an **in-memory key-value store** used for:

* Caching frequent queries
* Reducing database load
* Improving response times

This is critical for high-traffic platforms where performance matters.

📚 Resources:

* [https://redis.io/docs/](https://redis.io/docs/)

---

### 📦 Containerization – Docker

Docker ensures the application:

* Runs the same on all machines
* Is easy to deploy
* Is cloud-ready

We containerize the app so it behaves identically in:

* Local development
* Testing
* Production

📚 Resources:

* [https://docs.docker.com/](https://docs.docker.com/)

---

### ☁️ Cloud Deployment – AWS / Azure

The platform is designed to be deployed on:

* **AWS** or
* **Microsoft Azure**

Cloud services handle:

* Hosting
* Scaling
* Security
* Availability

CI/CD pipelines automate deployment using GitHub Actions.

---

### 🔁 CI/CD – GitHub Actions

With CI/CD:

* Code is automatically built
* Tests are run on every PR
* Deployments happen without manual effort

This reflects **real-world DevOps workflows**.

📚 Resources:

* [https://docs.github.com/en/actions](https://docs.github.com/en/actions)

---

## 🧪 Sprint #1 – Learning Objectives

By the end of this sprint, you will be able to:

* ✅ Explain how a modern full-stack system is structured
* ✅ Understand why Next.js is preferred over plain React
* ✅ Identify where frontend, backend, and infrastructure live
* ✅ Read and understand real production-grade architecture
* ✅ Connect development practices to real industry use cases

---

## 🚀 Getting Started (Local Setup)

```bash
# Clone the repository
git clone <repo-url>

# Install dependencies
npm install

# Start development server
npm run dev
```

> Environment variables, Docker setup, and database configuration will be introduced in upcoming sprints.

---

## 🏗️ Future Scope

Upcoming sprints will include:

* Authentication & authorization
* Contribution tracking workflows
* Role-based access (NGO, Contributor, Maintainer)
* Activity timelines & reusable pipelines
* Analytics and reporting dashboards

---

## 🧭 Final Note

> **“You’re not just learning frameworks — you’re learning how the modern web runs.”**

This sprint focuses on **understanding the ecosystem**, not just writing code.
Mastering this foundation will make advanced features feel natural in later sprints.

---

If you want, I can also:

* Convert this into **short README version**
* Add **project folder structure**
* Add **API documentation section**
* Rewrite it in **simple Indian English tone**

Just tell me 👍




















## TypeScript, ESLint, Prettier & Pre-Commit Hooks Setup

### 1. TypeScript Strict Mode
We enabled strict TypeScript settings in `tsconfig.json`:

- `strict: true` → catches type errors early
- `noImplicitAny` → forces explicit typing
- `noUnusedLocals` & `noUnusedParameters` → warns for unused code
- `forceConsistentCasingInFileNames` → prevents file import mismatches
- `skipLibCheck` → skips checking external library types for faster builds

**Benefit:** Reduces runtime bugs and improves code safety.

### 2. ESLint + Prettier Configuration
- ESLint (`.eslintrc.json`) enforces code quality and style
  - `no-console: warn` → warns on leftover console logs
  - `semi: ["error", "always"]` → enforces semicolons
  - `quotes: ["error", "double"]` → enforces double quotes
- Prettier (`.prettierrc`) ensures consistent formatting across the team

**Benefit:** Keeps code readable, clean, and consistent.

### 3. Pre-Commit Hooks
- Husky + lint-staged runs **ESLint + Prettier** automatically before every commit
- Only staged files are checked (`*.ts, *.tsx, *.js, *.jsx`)

**Benefit:** Prevents buggy or unformatted code from entering the repository.

### 4. Screenshots / Logs
Include screenshots showing:
- ESLint fixing errors
- Prettier formatting code
- Pre-commit hook blocking commit if errors exist

### 5. Team Reflection
> “If our team scaled to 10 developers tomorrow, this setup ensures consistent code quality, prevents conflicts, and avoids chaotic commits.”










## Environment Variable Management

This project uses environment variables to manage secrets and configuration safely.

### Environment Files
- `.env.local`  
  Used for real credentials such as database URLs and API keys.  
  This file is ignored by Git and never pushed to GitHub.

- `.env.example`  
  Acts as a template listing all required environment variables with placeholder values.  
  This helps other developers set up the project locally.

### Server-side Variables
These variables are available only on the server and must not be exposed to the client.
- `DATABASE_URL`
- `SECRET_KEY`

They are accessed using `process.env` in server-side code.

### Client-side Variables
Client-safe variables must start with `NEXT_PUBLIC_`.
- `NEXT_PUBLIC_API_BASE_URL`

These can be safely used in client components.

### Security Practices
- `.env.local` is added to `.gitignore` to prevent accidental commits.
- Only `.env.example` is committed to the repository.
- Secrets are never exposed to the browser.

### Reflection
If `.env.local` is accidentally pushed to GitHub, sensitive credentials could be leaked.  
This setup prevents that by ignoring `.env.local` and enforcing the use of `.env.example`.




## Code Review Checklist

Before approving any Pull Request, reviewers must ensure:

- Code follows project naming conventions
- Feature or fix works correctly when tested locally
- No console errors or warnings
- ESLint and Prettier checks pass
- Code is readable with meaningful comments
- No sensitive data (API keys, passwords) is exposed


## Branching Strategy

We follow a structured branching strategy to maintain clarity and consistency:

- feature/<feature-name> for new features
- fix/<bug-name> for bug fixes
- chore/<task-name> for maintenance tasks
- docs/<update-name> for documentation updates

All changes must be merged into the `main` branch only through Pull Requests.







## Transaction & Query Optimisation

### Transaction Scenario
A task creation flow was implemented where both the task and its initial comment are created inside a Prisma transaction. This ensures atomicity and prevents partial writes.

### Rollback Verification
An invalid statusId was intentionally passed to trigger a failure. Prisma rolled back both task and comment creation, ensuring database consistency.

### Indexes Used
Indexes were added on foreign key columns such as projectId, statusId, taskId, and userId to optimise filtering and relational queries.

### Query Optimisation
- Avoided over-fetching by using `select`
- Implemented pagination using `take`
- Reduced joins and payload size

### Performance Evidence
Prisma query logs were enabled to compare query execution times before and after optimisation.

### Anti-patterns Avoided
- N+1 queries
- Full table scans
- Over-fetching relations

### Production Monitoring
In production, query latency and slow queries would be monitored using Prisma logs and database performance tools such as PostgreSQL EXPLAIN and cloud monitoring services.








## Global API Response Handler

All API routes use a unified response format for success and error handling.

### Success Response Format
```json
{
  "success": true,
  "message": "Users fetched successfully",
  "data": [],
  "timestamp": "2026-01-22T10:30:00Z"
}

 









 ## Input Validation with Zod

Zod is used to validate all POST and PUT API requests.

### Example Validation Error Response
```json
{
  "success": false,
  "message": "Validation Error",
  "errors": [
    { "field": "email", "message": "Invalid email address" }
  ]
}




Update README.md

Add:

Signup flow

Login flow

JWT expiry (1 hour)

Token storage (cookie vs localStorage)

Screenshots (Postman success + failure)Update README.md

Add:

Signup flow

Login flow

JWT expiry (1 hour)

Token storage (cookie vs localStorage)

Screenshots (Postman success + failure)





Cached users:list

Reason: frequently accessed data

🔹 TTL Policy

TTL = 60 seconds

Prevents stale data

🔹 Cache Invalidation

Cache cleared on user update

🔹 Performance Improvement

Cold request: ~120ms

Cached request: ~10ms

🔹 Reflection (Write this)

A unified Redis cache reduced database load and improved API response time. Cache invalidation ensures data freshness while TTL prevents long-lived stale data.






## Global API Response Handler

### Success Response
```json
{
  "success": true,
  "message": "Users fetched successfully",
  "data": [],
  "timestamp": "2026-01-30T10:00:00.000Z"
}

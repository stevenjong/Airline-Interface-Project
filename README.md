# Airline Interface Project
A full-stack In-Flight Entertainment and Connectivity (IFEC) management system built with TypeScript, React, Python, FastAPI, and PostgreSQL.

## Features
- Aircraft Dashboard
- Content Manager
- Distribution Manager
- Add/Delete Page



## Stack
- Frontend: React, Typescript

  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

- Backend: FastAPI, Python

  [![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
  [![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
  
- Database: PostgreSQL

  [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

- Containerization: Docker

  [![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)


## Installation

**Clone this repository**
```
git clone https://github.com/stevenjong/Airline-Interface-Project.git
```
<br>

**From the project root, run:**
```
docker-compose up --build
```
(note: make sure Docker Desktop is running)

<br>

**Fill the database with placeholder values**
```
PGPASSWORD=password psql -h localhost -p 5433 -U postgres -d ifec_db -f airlineproject-backend/seed.sql
```

<br>
**Open the frontend at http://localhost:3000**


## Work in progress
- Sign up/Log in page
- Role authentication
- Implement leftover routers
- Add routers

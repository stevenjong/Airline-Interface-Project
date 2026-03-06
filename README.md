# Airline Interface Project
A full-stack In-Flight Entertainment and Connectivity (IFEC) management system built with TypeScript, React, Python, FastAPI, and PostgreSQL.

## Features
- Aircraft Dashboard
- Content Manager
- Distribution Manager
- Add/Delete Page



## Stack
- Frontend: React, Typescript
- Backend: FastAPI, Python
- Database: PostgreSQL
- Containerization: Docker



## Installation
**In terminal:**

Clone this repository
```
git clone https://github.com/stevenjong/Airline-Interface-Project.git
```


From the project root, run (note: make sure Docker Desktop is running):
```
docker-compose up --build
```


Fill the database with placeholder values
```
PGPASSWORD=password psql -h localhost -p 5433 -U postgres -d ifec_db -f airlineproject-backend/seed.sql
```


Open the frontend at http://localhost:3000


## Work in progress
- Sign up/Log in page
- Role authentication
- More routers

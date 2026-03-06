from fastapi import FastAPI
from database import Base, engine
from routers import aircraft, content, users, distribution
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.add_middleware(CORSMiddleware, allow_origins = ['http://localhost:3000'], allow_credentials = True, allow_methods=['*'], allow_headers=['*'])
app.include_router(aircraft.router)
app.include_router(content.router)
app.include_router(users.router)
app.include_router(distribution.router)

@app.get('/')
def start_page():
    return{'message' : 'IFEC simulator is running'}
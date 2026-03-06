from database import Base
from sqlalchemy import Column, String, Integer
from pydantic import BaseModel

class Users(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key = True, autoincrement = True)
    email = Column(String)
    password_hash = Column(String)
    role = Column(String)

class UsersInput(BaseModel):
    email: str
    password_hash: str
    role: str

class UsersOutput(BaseModel):
    id: int
    email: str
    role: str
    class Config():
        from_attributes = True
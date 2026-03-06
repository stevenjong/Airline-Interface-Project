from database import Base
from sqlalchemy import Column, String, Integer, Float
from pydantic import BaseModel
from typing import Optional

class Content(Base):
    __tablename__ = 'content'
    id = Column(Integer, primary_key = True, autoincrement = True)
    name = Column(String)
    type = Column(String)
    tags = Column(String)
    format = Column(String)
    duration = Column(Integer)
    file_size = Column(Float)

class ContentInput(BaseModel):
    name: str
    type: str
    tags: str
    format: str
    duration: Optional[int] = None
    file_size: float

class ContentOutput(BaseModel):
    id: int
    name: str
    type: str
    tags: str
    format: str
    duration: Optional[int] = None
    file_size: float
    class Config():
        from_attributes = True
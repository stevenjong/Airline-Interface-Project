from database import Base
from sqlalchemy import Column, String, Boolean, DateTime, Integer
from pydantic import BaseModel
from datetime import datetime

class Aircraft(Base):
    __tablename__ = 'aircraft'
    id = Column(Integer, primary_key = True, autoincrement = True)
    airline = Column(String)
    tail_number = Column(String)
    model = Column(String)
    software_ver = Column(String)
    connected = Column(Boolean)
    last_connection = Column(DateTime)

class AircraftInput(BaseModel):
    airline: str
    tail_number: str
    model: str
    software_ver: str

class AircraftOutput(BaseModel):
    id: int
    airline: str
    tail_number: str
    model: str
    software_ver: str
    connected: bool
    last_connection: datetime
    class Config():
        from_attributes = True
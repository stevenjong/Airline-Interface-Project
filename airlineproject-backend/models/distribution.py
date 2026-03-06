from database import Base
from sqlalchemy import Column, String, DateTime, Integer, ForeignKey
from pydantic import BaseModel
from datetime import datetime

class Distribution (Base):
    __tablename__ = 'distribution'
    id = Column(Integer, primary_key = True, autoincrement = True)
    aircraft_id = Column(Integer, ForeignKey('aircraft.id'))
    content_id = Column(Integer, ForeignKey('content.id'))
    scheduled_date = Column(DateTime)
    status = Column (String)

class DistributionInput(BaseModel):
    aircraft_id: int
    content_id: int
    scheduled_date: datetime
    status: str

class DistributionOutput(BaseModel):
    id: int
    aircraft_id: int
    content_id: int
    scheduled_date: datetime
    status: str
    class Config():
        from_attributes = True
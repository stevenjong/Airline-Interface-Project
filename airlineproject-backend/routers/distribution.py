from fastapi import APIRouter, Depends
from database import get_db
from sqlalchemy.orm import Session
from models.distribution import Distribution, DistributionInput, DistributionOutput
from datetime import datetime

router = APIRouter()

@router.get('/distribution')
def all_distribution(db: Session = Depends(get_db)):
    all_distribution = db.query(Distribution).all()
    return all_distribution

@router.get('/distribution/{aircraft_id}/{content_id}')
def one_distribution(aircraft_id: int, content_id: int, db: Session = Depends(get_db)):
    one_distribution = db.query(Distribution).filter(Distribution.aircraft_id == aircraft_id).filter(Distribution.content_id == content_id).first()
    return one_distribution

@router.post('/distribution')
def add_distribution(distribution: DistributionInput, db: Session = Depends(get_db)):
    new_distribution = Distribution(aircraft_id = distribution.aircraft_id, content_id = distribution.content_id, scheduled_date = distribution.scheduled_date, status = distribution.status)
    db.add(new_distribution)
    db.commit()
    return new_distribution

@router.delete('/distribution/{aircraft_id}/{content_id}')
def delete_distribution(aircraft_id: int, content_id: int, db: Session = Depends(get_db)):
    one_distribution = db.query(Distribution).filter(Distribution.aircraft_id == aircraft_id).filter(Distribution.content_id == content_id).first()
    db.delete(one_distribution)
    db.commit()
    return one_distribution

@router.put('/distribution/{aircraft_id}/{content_id}/scheduled_date')
def schedule_one_distribution(aircraft_id: int, content_id: int, scheduled_date: datetime, db: Session = Depends(get_db)):
    one_distribution = db.query(Distribution).filter(Distribution.aircraft_id == aircraft_id).filter(Distribution.content_id == content_id).first()
    one_distribution.scheduled_date = scheduled_date
    db.commit()
    return one_distribution

@router.put('/distribution/{aircraft_id}/{content_id}/status')
def change_status_one_distribution(aircraft_id: int, content_id: int, status: str, db: Session = Depends(get_db)):
    one_distribution = db.query(Distribution).filter(Distribution.aircraft_id == aircraft_id).filter(Distribution.content_id == content_id).first()
    one_distribution.status = status
    db.commit()
    return one_distribution
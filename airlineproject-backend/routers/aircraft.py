from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from models.aircraft import Aircraft, AircraftInput, AircraftOutput
from datetime import datetime

router = APIRouter()

@router.get('/aircraft')
def get_aircrafts(db: Session = Depends(get_db)):
    all_aircrafts = db.query(Aircraft).all()
    return all_aircrafts

@router.get('/aircraft/{tail_number}')
def get_one_aircraft_tn(tail_number: str, db: Session = Depends(get_db)):
    one_aircraft_tn = db.query(Aircraft).filter(Aircraft.tail_number == tail_number).first()
    return one_aircraft_tn

@router.post('/aircraft')
def add_aircraft(aircraft: AircraftInput, db: Session = Depends(get_db)):
    new_aircraft = Aircraft(tail_number = aircraft.tail_number, airline = aircraft.airline, model = aircraft.model, software_ver = aircraft.software_ver)
    db.add(new_aircraft)
    db.commit()
    return new_aircraft

@router.put('/aircraft/{tail_number}')
def update_aircraft_tn_status(tail_number: str, connected: bool, db: Session = Depends(get_db)):
    one_aircraft_tn = db.query(Aircraft).filter(Aircraft.tail_number == tail_number).first()
    one_aircraft_tn.connected = connected
    if(one_aircraft_tn.connected == True):
        one_aircraft_tn.last_connection = datetime.now()
    db.commit()
    return one_aircraft_tn

@router.delete('/aircraft/{tail_number}')
def delete_aircraft_tn(tail_number: str, db: Session = Depends(get_db)):
    one_aircraft_tn = db.query(Aircraft).filter(Aircraft.tail_number == tail_number).first()
    db.delete(one_aircraft_tn)
    db.commit()
    return one_aircraft_tn
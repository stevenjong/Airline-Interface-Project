from fastapi import APIRouter, Depends
from database import get_db
from sqlalchemy.orm import Session
from models.users import Users, UsersInput, UsersOutput

router = APIRouter()

@router.get('/users')
def get_users(db: Session = Depends(get_db)):
    all_users = db.query(Users).all()
    return all_users

@router.get('/users/{email}')
def get_one_user(email: str, db: Session = Depends(get_db)):
    one_user = db.query(Users).filter(Users.email == email).first()
    return one_user

@router.post('/users')
def add_user(users: UsersInput, db: Session = Depends(get_db)):
    new_user = Users(email = users.email, password_hash = users.password_hash, role = users.role)
    db.add(new_user)
    db.commit()
    return new_user

@router.delete('/users/{email}')
def delete_user(email: str, db: Session = Depends(get_db)):
    one_user = db.query(Users).filter(Users.email == email).first()
    db.delete(one_user)
    db.commit()
    return one_user
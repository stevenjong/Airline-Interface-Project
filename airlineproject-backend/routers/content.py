from fastapi import APIRouter, Depends
from database import get_db
from sqlalchemy.orm import Session
from models.content import Content, ContentInput, ContentOutput

router = APIRouter()

@router.get('/content')
def get_content(db: Session = Depends(get_db)):
    all_content = db.query(Content).all()
    return all_content

@router.get('/content/{name}')
def get_one_content(name: str, db: Session = Depends(get_db)):
    one_content = db.query(Content).filter(Content.name == name).first()
    return one_content

@router.post('/content')
def add_content(content: ContentInput, db: Session = Depends(get_db)):
    new_content = Content(name = content.name, type = content.type, tags = content.tags, format = content.format, duration = content.duration, file_size = content.file_size)
    db.add (new_content)
    db.commit()
    return new_content

@router.delete('/content/{name}')
def delete_content(name: str, db: Session = Depends(get_db)):
    one_content = db.query(Content).filter(Content.name == name).first()
    db.delete (one_content)
    db.commit()
    return one_content
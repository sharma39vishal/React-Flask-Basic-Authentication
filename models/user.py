from sqlalchemy import Column, Integer, String
from flask_sqlalchemy import SQLAlchemy
from extensions import db

class User(db.Model):
    id = Column(Integer, primary_key=True)
    username = Column(String(100), unique=True, nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    password = Column(String(100), nullable=False)
    def __repr__(self):
            return f'<User {self.username}>'

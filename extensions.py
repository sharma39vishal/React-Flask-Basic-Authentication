from flask_sqlalchemy import SQLAlchemy
# add jwt
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()
db = SQLAlchemy()
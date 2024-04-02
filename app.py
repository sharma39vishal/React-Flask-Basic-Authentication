from flask import Flask
from extensions import db, bcrypt
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

db.init_app(app)
bcrypt.init_app(app)

# with app.app_context():
#     import models.user
#     db.create_all()

from routes.auth_routes import auth_bp
from routes.user_routes import user_bp

app.register_blueprint(auth_bp, url_prefix='/api/auth')
app.register_blueprint(user_bp, url_prefix='/api/profile')

if __name__ == '__main__':
    app.run(debug=True)

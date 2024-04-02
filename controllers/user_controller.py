from flask import jsonify
from models.user import User
from middleware.auth_middleware import get_user_id

def get_user_data():
    user_id = get_user_id()
    user = User.query.filter_by(id=user_id).first()
    if user:
        return jsonify({'username': user.username, 'email': user.email}), 200
    else:
        return jsonify({'message': 'User not found'}), 404

from flask import request, jsonify
import jwt
from config import Config

def auth_required(func):
    def wrapper(*args, **kwargs):
        token = request.cookies.get('Authorization')
        if not token:
            return jsonify({'message': 'Authorization header is missing'}), 401
        try:
            decoded = jwt.decode(token, Config.JWT_SECRET, algorithms=['HS256'])
            request.user_id = decoded.get('user_id')
            return func(*args, **kwargs)
        except jwt.ExpiredSignatureError:
            return jsonify({'message': 'Token has expired'}), 401
        except jwt.InvalidTokenError:
            return jsonify({'message': 'Invalid token'}), 401
    return wrapper

def get_user_id():
    return getattr(request, 'user_id', None)

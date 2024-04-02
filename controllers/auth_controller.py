from flask import jsonify, request, make_response
from models.user import User
from extensions import db, bcrypt
import jwt
from config import Config

def signup():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    user = User(username=username, email=email, password=hashed_password)

    try:
        db.session.add(user)
        db.session.commit()

        # Create JWT token
        token = jwt.encode({'user_id': user.id}, Config.JWT_SECRET, algorithm='HS256')
        
        # Set the token as a cookie in the response
        response = make_response(jsonify({'message': 'User created successfully'}), 201)
        response.set_cookie('Authorization', token, httponly=True)
        return response
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': str(e)}), 400

def signin():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()
    if user and bcrypt.check_password_hash(user.password, password):
        # Create JWT token
        token = jwt.encode({'user_id': user.id}, Config.JWT_SECRET, algorithm='HS256')

        # Set the token as a cookie in the response
        response = make_response(jsonify({'message': 'Login successful'}), 200)
        response.set_cookie('Authorization', token, httponly=True)
        return response
    else:
        return jsonify({'message': 'Invalid email or password'}), 401

def logout():
    # Clear the token cookie in the response
    response = make_response(jsonify({'message': 'Logged out successfully'}), 200)
    response.set_cookie('Authorization', '', expires=0, httponly=True)
    return response

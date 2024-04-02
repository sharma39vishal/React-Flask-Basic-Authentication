from flask import Blueprint
from controllers.auth_controller import signup, signin, logout

auth_bp = Blueprint('auth_bp', __name__)

auth_bp.route('/signup', methods=['POST'])(signup)
auth_bp.route('/signin', methods=['POST'])(signin)
auth_bp.route('/logout', methods=['GET'])(logout)

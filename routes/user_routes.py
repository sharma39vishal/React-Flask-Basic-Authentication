from flask import Blueprint
from controllers.user_controller import get_user_data
from middleware.auth_middleware import auth_required

user_bp = Blueprint('user_bp', __name__)

user_bp.route('/userdata', methods=['GET'])(auth_required(get_user_data))

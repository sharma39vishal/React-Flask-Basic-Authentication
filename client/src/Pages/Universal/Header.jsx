import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

export default function Header() {
    const { userdata, logout } = useAuth();
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="flex justify-between items-center py-4 px-6 bg-gray-800 text-white">
            <div>Basic Auth</div>
            {userdata ? (
                <div className="relative">
                    <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
                        <div className="mr-2">{userdata?.username}</div>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    {showDropdown && (
                        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
                            <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Profile</Link>
                            <Link to="/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Settings</Link>
                            <hr />
                            <a onClick={logout} className="w-100 block px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</a>
                        </div>
                    )}
                </div>
            ) : (
                <div>
                    <Link to="/signin" className="mr-4">Sign In</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
            )}
        </div>
    );
}

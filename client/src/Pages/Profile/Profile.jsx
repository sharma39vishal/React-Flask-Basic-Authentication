import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

export default function Profile() {
    const { userdata, logout } = useAuth();

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-4">Profile</h1>
            {userdata ? (
                <div>
                    <p><span className="font-semibold">Username:</span> {userdata.username}</p>
                    <p><span className="font-semibold">Email:</span> {userdata.email}</p>
                    {/* Add more profile information here */}
                    <div className="mt-4">
                        <Link to="/settings" className="text-blue-500 hover:underline">Edit Profile</Link>
                    </div>
                    <div className="mt-4">
                        <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Logout</button>
                    </div>
                </div>
            ) : (
                <p>Please sign in to view your profile.</p>
            )}
        </div>
    );
}

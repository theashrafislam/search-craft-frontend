import React from 'react';

const UserProfile = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <div className="flex flex-col items-center">
                    {/* Profile Image */}
                    <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg mb-4">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="User Avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* User Info */}
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Ashraful Islam</h2>
                    <p className="text-gray-500 mb-6">ashraful@example.com</p>
                    {/* Buttons */}
                    <div className="w-full flex flex-col items-center space-y-4">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition w-full">
                            Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
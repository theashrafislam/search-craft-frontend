import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { NavLink } from "react-router-dom";

const UserProfile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <div className="flex flex-col items-center">
                    {/* Profile Image */}
                    <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg mb-4">
                        <img
                            src={user?.photoURL ? user.photoURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp0xKoXUryp0JZ1Sxp-99eQiQcFrmA1M1qbQ&s'}
                            alt="User Avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* User Info */}
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">{user?.displayName ? user?.displayName : 'Your name is not available.'}</h2>
                    <p className="text-gray-500 mb-6">{user?.email}</p>
                    {/* Buttons */}
                    <div className="w-full flex flex-col items-center space-y-4">
                        <NavLink to={"/"} className="text-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition w-full">
                            Home
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';

const Navbar = () => {

    const { user, userSignOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSignOut = () => {
        userSignOut()
            .then(result => {
                toast.success('Successfully signed out. You are now logged out.');
            })
            .catch(error => {
                toast.error('Sign-out attempt unsuccessful. Please try again.');
            })
    }

    return (
        <nav className="bg-blue-900 text-white shadow-lg">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <NavLink to="/">Search Craft</NavLink>
                </div>
                <div className="hidden md:flex items-center space-x-6">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'text-gray-300 border-b-2 border-white' : 'hover:text-gray-300'
                        }
                    >
                        Home
                    </NavLink>
                    {
                        user && <>
                            <NavLink
                                to="/products"
                                className={({ isActive }) =>
                                    isActive ? 'text-gray-300 border-b-2 border-white' : 'hover:text-gray-300'
                                }
                            >
                                Products
                            </NavLink>
                            <NavLink
                                to="/profile"
                                className={({ isActive }) =>
                                    isActive ? 'text-gray-300 border-b-2 border-white' : 'hover:text-gray-300'
                                }
                            >
                                Profile
                            </NavLink>
                        </>
                    }
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive ? 'text-gray-300 border-b-2 border-white' : 'hover:text-gray-300'
                        }
                    >
                        Login
                    </NavLink>
                    <NavLink
                        to="/register"
                        className={({ isActive }) =>
                            isActive ? 'text-gray-300 border-b-2 border-white' : 'hover:text-gray-300'
                        }
                    >
                        Register
                    </NavLink>
                    {
                        user && <NavLink
                            onClick={handleSignOut}
                            className={'hover:bg-blue-700 bg-red-500 px-3 py-2 rounded-lg'}
                        >
                            Sign Out
                        </NavLink>
                    }
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-2xl focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}
                            />
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'block py-2 px-4 text-sm bg-blue-700' : 'block py-2 px-4 text-sm hover:bg-blue-700'
                        }
                        onClick={toggleMenu}
                    >
                        Home
                    </NavLink>
                    {
                        user && <NavLink
                            to="/products"
                            className={({ isActive }) =>
                                isActive ? 'block py-2 px-4 text-sm bg-blue-700' : 'block py-2 px-4 text-sm hover:bg-blue-700'
                            }
                            onClick={toggleMenu}
                        >
                            Products
                        </NavLink>
                    }
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive ? 'block py-2 px-4 text-sm bg-blue-700' : 'block py-2 px-4 text-sm hover:bg-blue-700'
                        }
                        onClick={toggleMenu}
                    >
                        Login
                    </NavLink>
                    <NavLink
                        to="/register"
                        className={({ isActive }) =>
                            isActive ? 'block py-2 px-4 text-sm bg-blue-700' : 'block py-2 px-4 text-sm hover:bg-blue-700'
                        }
                        onClick={toggleMenu}
                    >
                        Register
                    </NavLink>
                    {
                        user && <NavLink
                            to="/profile"
                            className={({ isActive }) =>
                                isActive ? 'block py-2 px-4 text-sm bg-blue-700' : 'block py-2 px-4 text-sm hover:bg-blue-700'
                            }
                            onClick={toggleMenu}
                        >
                            Profile
                        </NavLink>
                    }
                    {
                        user && <NavLink
                            onClick={handleSignOut}
                            className={'block py-2 px-4 text-sm hover:bg-blue-700'}
                        >
                            Sign Out
                        </NavLink>
                    }
                </div>
            )}
        </nav>
    );
};

export default Navbar;
import { useContext, useState } from 'react';
import { IoMdEyeOff } from 'react-icons/io';
import { IoEye } from 'react-icons/io5';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const { createUserUsingEmailPassword, userSignOut } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleRegisterForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        createUserUsingEmailPassword(email, password)
            .then(result => {
                toast.success('Thank you for registering. Your account has been created successfully.');
                userSignOut()
                    .then(result => {
                        navigate('/login');
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                toast.error('Registration was not successful. Please ensure all details are correct and try again.')
            })
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
            <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-2xl">
                <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-900">Create an Account</h2>
                <form onSubmit={handleRegisterForm} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="Enter your email"
                            className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        />
                    </div>
                    <div className="relative">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            required
                            placeholder="Enter your password"
                            className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        />
                        <div
                            className="absolute inset-y-0 right-3 top-6 flex items-center cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                                <IoMdEyeOff className='text-2xl' />
                            ) : (
                                <IoEye className='text-2xl' />
                            )}
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 px-6 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-transform transform hover:scale-105"
                    >
                        Register
                    </button>
                    <p className="text-center text-gray-600 mt-6">
                        Already have an account?{' '}
                        <a href="/login" className="text-purple-600 hover:underline">
                            Login
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
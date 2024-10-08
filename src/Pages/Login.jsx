import { useContext, useState } from 'react';
import { IoMdEyeOff } from 'react-icons/io';
import { IoEye } from 'react-icons/io5';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Login = () => {
    const { loginUsingEmailPassword, loginWithGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLoginForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUsingEmailPassword(email, password)
            .then(result => {
                toast.success('Login successful. You are now connected.');
                navigate('/')
            })
            .catch(error => {
                toast.error('Your login attempt failed. Ensure your details are correct and try again.');
            });
    };

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                toast.success('Login successful. You are now connected.');
                navigate('/')
            })
            .catch(error => {
                toast.error('Your login attempt failed. Ensure your details are correct and try again.');
            })
    };

    return (
        <HelmetProvider>
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <Helmet>
        <title>Access Your Account | Search Craft</title>
      </Helmet>
            <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-2xl">
                <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-900">Welcome Back</h2>

                <form onSubmit={handleLoginForm} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name='email'
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
                            name='password'
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
                        Login
                    </button>
                    <button
                        onClick={handleGoogleLogin}
                        className="w-full py-3 px-6 rounded-lg bg-white text-gray-800 border border-gray-300 font-semibold hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition-transform transform hover:scale-105 mb-6 flex items-center justify-center"
                    >
                        <FcGoogle className='text-2xl'/>
                        Login with Google
                    </button>
                    <p className="text-center text-gray-600 mt-6">
                        Don't have an account?{' '}
                        <a href="/register" className="text-purple-600 hover:underline">
                            Register
                        </a>
                    </p>
                </form>
            </div>
        </div>
        </HelmetProvider>
    );
};

export default Login;
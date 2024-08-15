import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <section className="mb-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Get Started</h2>
      <p className="text-lg max-w-3xl mx-auto text-center mb-8">
        To start managing your products, you'll need to create an account or log in if you already have one.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <Link
          to="/login"
          className="text-lg bg-blue-500 text-white py-3 px-8 rounded-md shadow-lg hover:bg-blue-600 transition-colors duration-300 transform hover:-translate-y-1"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="text-lg bg-green-500 text-white py-3 px-8 rounded-md shadow-lg hover:bg-green-600 transition-colors duration-300 transform hover:-translate-y-1"
        >
          Register
        </Link>
      </div>
    </section>
  );
};

export default GetStarted;
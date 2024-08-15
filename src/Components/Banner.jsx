import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <header className="bg-blue-900 text-white dark:bg-blue-700 w-full text-center py-12">
      <h1 className="text-5xl font-bold">Welcome to Our Product Management Platform</h1>
      <p className="mt-4 text-xl px-2">Manage your products with ease and efficiency.</p>
      <div className="mt-8">
        <Link
          to="/products"
          className="text-lg bg-yellow-400 text-black py-3 px-6 rounded-md shadow-lg hover:bg-yellow-500"
        >
          View Products
        </Link>
      </div>
    </header>
  );
};

export default Banner;
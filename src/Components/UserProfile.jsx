import { Link } from 'react-router-dom';

const UserProfile = () => {
  return (
    <section className="mb-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center mb-8">User Profile</h2>
      <p className="text-lg max-w-3xl mx-auto text-center mb-8">
        Access your profile to manage your account settings and view your activity.
      </p>
      <div className="flex justify-center">
        <Link
          to="/profile"
          className="text-lg bg-purple-500 text-white py-3 px-8 rounded-md shadow-lg hover:bg-purple-600 transition-colors duration-300 transform hover:-translate-y-1"
        >
          Go to Profile
        </Link>
      </div>
    </section>
  );
};

export default UserProfile;
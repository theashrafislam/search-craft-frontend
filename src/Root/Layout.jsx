import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar />
            <Outlet />
            <Footer />
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
};

export default Layout;
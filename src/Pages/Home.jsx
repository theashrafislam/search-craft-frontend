import { useContext } from "react";
import Banner from "../Components/Banner";
import Features from "../Components/Features";
import GetStarted from "../Components/GetStarted";
import UserProfile from "../Components/UserProfile";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <HelmetProvider>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col justify-center items-center">
        <Helmet>
        <title>Welcome to Search Craft || Your Ultimate Product Discovery Hub</title>
      </Helmet>
            <Banner />
            <main className="flex flex-col items-center text-center py-12">
                <Features />
                {
                    !user && <GetStarted />
                }
                {
                    user && <UserProfile />
                }
            </main>
        </div>
        </HelmetProvider>
    );
};

export default Home;
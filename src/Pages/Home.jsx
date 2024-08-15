import Banner from "../Components/Banner";
import Features from "../Components/Features";
import GetStarted from "../Components/GetStarted";
import UserProfile from "../Components/UserProfile";

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col justify-center items-center">
            <Banner />
            <main className="flex flex-col items-center text-center py-12">
                <Features />
                <GetStarted />
                <UserProfile />
            </main>
        </div>
    );
};

export default Home;
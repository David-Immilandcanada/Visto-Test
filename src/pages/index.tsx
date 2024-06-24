import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center bg-white text-black">
            <Header />
            <main className="w-full max-w-4xl p-4 flex flex-col items-center flex-grow">
                <SearchBar />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;

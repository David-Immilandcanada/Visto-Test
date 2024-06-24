import SearchBar from '../components/SearchBar';
import CountryList from '../components/CountryList';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center bg-white text-black">
        <header className="w-full p-4 bg-[#1a3c4c] text-center">
                <h1 className="text-3xl font-bold text-white">Country Search</h1>
            </header>
            <main className="w-full max-w-4xl p-4 flex flex-col items-center flex-grow">
                <SearchBar />
                <CountryList />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;

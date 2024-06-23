// src/pages/index.tsx
import SearchBar from '../components/SearchBar';
import CountryList from '../components/CountryList';

const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center bg-white text-black">
            <header className="w-full p-4 bg-gray-100 text-center">
                <h1 className="text-3xl font-bold">Country Search</h1>
            </header>
            <main className="w-full max-w-4xl p-4 flex flex-col items-center">
                <SearchBar />
                <CountryList />
            </main>
        </div>
    );
};

export default HomePage;

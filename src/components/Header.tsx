import Image from 'next/image';

const Header = () => {
    return (
        <header className="w-full p-4 bg-[#1a3c4c] text-center flex items-center">
            <div className="flex items-center justify-start w-full max-w-4xl mx-auto">
                <Image src="/assets/logo.svg" alt="App Logo" width={32} height={32} />
                <h1 className="text-3xl font-bold text-white ml-2">Country Search</h1>
            </div>
        </header>
    );
};

export default Header;

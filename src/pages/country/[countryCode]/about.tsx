import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useCountry } from '../../../context/CountryContext';
import dynamic from 'next/dynamic';
import Footer from '../../../components/Footer';

// Cargar el componente de mapa dinámicamente
const Map = dynamic(() => import('../../../components/Map'), { ssr: false });

const CountryDetails = () => {
    const router = useRouter();
    const { countryCode } = router.query;
    const { selectedCountry, setSelectedCountry } = useCountry();

    useEffect(() => {
        if (countryCode && !selectedCountry) {
            const fetchCountry = async () => {
                const res = await fetch(`/api/countries/${countryCode}`);
                const data = await res.json();
                setSelectedCountry(data);
            };

            fetchCountry();
        }
    }, [countryCode, selectedCountry, setSelectedCountry]);

    if (!selectedCountry) {
        return <div>Loading...</div>;
    }

    const country = selectedCountry;
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${country.latlng[0]},${country.latlng[1]}`;

    return (
        <div className="min-h-screen flex flex-col items-center bg-white text-black">
            <header className="w-full p-4 bg-[#1a3c4c] text-center">
                <h1 className="text-3xl font-bold text-white">Country Details</h1>
            </header>
            <main className="p-4 max-w-6xl mx-auto flex-grow">
                <div className="card">
                    <div className="card-title flex items-center mb-4">
                        <h1 className="text-2xl font-bold mr-4">{country.name}</h1>
                        <img src={country.flag} alt={`Flag of ${country.name}`} className="w-12 h-auto" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="mt-2"><strong>Native Name:</strong> {country.nativeName}</p>
                            <p className="mt-2"><strong>Currencies:</strong> {country.currencies.map(c => `${c.name} (${c.code}, ${c.symbol})`).join(', ')}</p>
                            <p className="mt-2"><strong>Capital:</strong> {country.capital}</p>
                            <p className="mt-2"><strong>Region:</strong> {country.region}</p>
                            <p className="mt-2"><strong>Subregion:</strong> {country.subregion}</p>
                            <p className="mt-2"><strong>Languages:</strong> {country.languages.map(l => `${l.name} (${l.nativeName})`).join(', ')}</p>
                            <p className="mt-2"><strong>Bordering Countries:</strong> {country.borders ? country.borders.join(', ') : 'None'}</p>
                        </div>
                        <div>
                            <p className="mt-2"><strong>Population:</strong> {country.population}</p>
                            <p className="mt-2"><strong>Calling Code:</strong> {country.callingCodes.join(', ')}</p>
                            <p className="mt-2"><strong>Area:</strong> {country.area} km²</p>
                            <p className="mt-2"><strong>Demonym:</strong> {country.demonym}</p>
                            <p className="mt-2"><strong>GINI:</strong> {country.gini}</p>
                            <p className="mt-2"><strong>Timezones:</strong> {country.timezones.join(', ')}</p>
                            {country.latlng && country.latlng.length === 2 && (
                                <div className="mt-4">
                                    <Map lat={country.latlng[0]} lng={country.latlng[1]} />
                                    <a 
                                        className="mt-2 text-blue-500 hover:underline block" 
                                        href={googleMapsUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        View on Google Maps
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="mt-4 flex justify-start">
                        <button 
                            onClick={() => router.push('/')}
                            className="button-visto"
                        >
                            Return to List
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CountryDetails;

// src/pages/country/[countryCode]/about.tsx
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useCountry } from '../../../context/CountryContext';

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

    return (
        <div className="p-4 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold">{country.name}</h1>
            <p className="mt-2">Official Name: {country.officialName}</p>
            <p className="mt-2">Native Name: {country.nativeName}</p>
            <p className="mt-2">Currencies: {country.currencies.map(c => c.name).join(', ')}</p>
            <p className="mt-2">Capital: {country.capital}</p>
            <p className="mt-2">Region: {country.region}</p>
            <p className="mt-2">Bordering Countries: {country.borders.join(', ')}</p>
            <p className="mt-2">Population: {country.population}</p>
            <a className="mt-2 text-blue-500 hover:underline" href={`https://www.google.com/maps/search/?api=1&query=${country.latlng[0]},${country.latlng[1]}`} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
            <p className="mt-2">Postal Code Format: {country.postalCodeFormat}</p>
        </div>
    );
};

export default CountryDetails;

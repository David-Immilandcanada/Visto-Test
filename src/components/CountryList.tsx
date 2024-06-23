import React from 'react';
import { useCountry } from '../context/CountryContext';

const CountryList = () => {
    const { searchResults, setSelectedCountry } = useCountry();

    return (
        <ul className="mt-4">
            {searchResults.map((country) => (
                <li key={country.alpha3Code} className="p-2 border-b border-gray-300 hover:bg-gray-100">
                    <a href={`/country/${country.alpha3Code}/about`} onClick={() => setSelectedCountry(country)} className="text-black hover:underline">
                        {country.name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default CountryList;

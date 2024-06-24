import React, { useState } from 'react';
import { useCountry } from '../context/CountryContext';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const { searchCountries, searchResults } = useCountry();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        searchCountries(e.target.value);
    };

    return (
        <div className="w-full">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search for a country..."
                className="w-full p-2 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-700"
            />
            {searchResults.length > 0 && (
                <ul className="border border-gray-300 mt-2 rounded bg-white max-h-60 overflow-y-auto">
                    {searchResults.map((country) => (
                        <li key={country.alpha3Code} className="hover:bg-gray-100">
                            <a href={`/country/${country.alpha3Code}/about`} className="flex items-center p-2 text-black hover:underline">
                                <img src={country.flag} alt={`Flag of ${country.name}`} className="w-6 h-4 mr-2" />
                                {country.name}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;

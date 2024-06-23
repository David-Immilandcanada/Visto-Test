// src/components/SearchBar.tsx
import React, { useState } from 'react';
import { useCountry } from '../context/CountryContext';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const { searchCountries } = useCountry();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        searchCountries(e.target.value);
    };

    return (
        <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search for a country..."
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
        />
    );
};

export default SearchBar;

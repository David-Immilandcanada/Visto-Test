import React, { createContext, useContext, useState, ReactNode, Key } from 'react';

interface Country {
    alpha3Code: Key | null | undefined;
    name: string;
    officialName: string;
    nativeName: string;
    currencies: { name: string }[];
    capital: string;
    region: string;
    borders: string[];
    population: number;
    latlng: [number, number];
    postalCodeFormat: string;
}

interface CountryContextProps {
    searchResults: Country[];
    selectedCountry: Country | null;
    searchCountries: (query: string) => void;
    setSelectedCountry: (country: Country) => void;
}

const CountryContext = createContext<CountryContextProps | undefined>(undefined);

export const CountryProvider = ({ children }: { children: ReactNode }) => {
    const [searchResults, setSearchResults] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountryState] = useState<Country | null>(null);

    const searchCountries = async (query: string) => {
        if (query.length > 0) {
            const res = await fetch(`/api/countries?name=${query}`);
            const data = await res.json();
            setSearchResults(data);
        } else {
            setSearchResults([]);
        }
    };

    const setSelectedCountry = (country: Country) => {
        setSelectedCountryState(country);
    };

    return (
        <CountryContext.Provider value={{ searchResults, selectedCountry, searchCountries, setSelectedCountry }}>
            {children}
        </CountryContext.Provider>
    );
};

export const useCountry = (): CountryContextProps => {
    const context = useContext(CountryContext);
    if (!context) {
        throw new Error('useCountry must be used within a CountryProvider');
    }
    return context;
};

import React, { createContext, useContext, useState, ReactNode, Key } from 'react';

interface Country {
    alpha3Code: Key | null | undefined;
    name: string;
    nativeName: string;
    officialName: string;
    currencies: { name: string; code: string; symbol: string }[];
    capital: string;
    region: string;
    subregion: string;
    borders: string[];
    population: number;
    latlng: [number, number];
    flag: string;
    callingCodes: string[];
    area: number;
    demonym: string;
    gini: number;
    languages: { name: string; nativeName: string }[];
    timezones: string[];
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

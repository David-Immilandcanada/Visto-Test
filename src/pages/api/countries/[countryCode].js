import axios from 'axios';

const getCountryDetails = async (req, res) => {
    const { countryCode } = req.query;
    try {
        const response = await axios.get(`https://restcountries.com/v2/alpha/${countryCode}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching country details' });
    }
};

export default getCountryDetails;

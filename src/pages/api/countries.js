import axios from 'axios';

const getCountriesByName = async (req, res) => {
    const { name } = req.query;
    try {
        const response = await axios.get(`https://restcountries.com/v2/name/${name}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching countries' });
    }
};

export default getCountriesByName;

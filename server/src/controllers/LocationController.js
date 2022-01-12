import {LocationServices} from '../services/LocationServices.js';

export const getCountries = async (req, res) =>{
    try {
        const country = await LocationServices.getCountry();
      
        res.status(200).json(country);

        
    } catch (error) {
        res.status(500).send(error);
    }
        
    }
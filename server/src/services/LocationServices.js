import { Country, State, City }  from 'country-state-city'

export const LocationServices = {
    getCountry: async () => {
        const country = await Country.getAllCountries();
        return country;
    },
    getState: async () => {
        const state = await State.getAllStates();
        return state;
    },
}
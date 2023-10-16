import axios from "axios";
const API_URL = `${import.meta.env.VITE_API_URL}/api/rest/v1`;

// Definir la función asincrónica que hace la petición a la API
export const getMotorcycles = async () => {
    try {
        const response = await axios.get(`${API_URL}/motorcycles`);
        const data = response.data;
        return data;
    } catch (error) {
        console.error(error);
    }
};
export const getMotorcyclesCategories = async () => {
    try {
        const response = await axios.get(`${API_URL}/categories`);
        const data = response.data;
        return data;
    } catch (error) {
        console.error(error);
    }
};

export async function getMotorcycleById(id) {
    const response = await fetch(`${API_URL}/motorcycles/${id}`);
    const data = await response.json();
    return data;
}

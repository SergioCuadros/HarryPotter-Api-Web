import axios from "axios";
import { Character} from "../types/harryPotterTypes";

const BASE_URL = "https://hp-api.onrender.com/api";


export const getCaharacters = async (): Promise<Character[]> => {
    try {
        const response = await axios.get(`${BASE_URL}/characters`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const getCharacterById = async (id: string): Promise<Character | null> => {
    try {
        const response = await axios.get(`${BASE_URL}/characters/${id}`);
        const character = response.data.find((char: Character) => char.id === id);
        return character || null;
    } catch (error) {
        console.error(error);
        return null;
        
    }
}
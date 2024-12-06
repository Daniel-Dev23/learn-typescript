import axios from 'axios';
import { Pokemon } from '../interfaces';

export const getPokemon = async ( pokemonID: number ): Promise<Pokemon> => {

    const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${ pokemonID }`);
    return data;

}
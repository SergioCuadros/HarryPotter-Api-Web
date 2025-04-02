import { useState, useEffect } from 'react';
import { getCaharacters } from '../data/hpApi'
import { Character } from '../types/harryPotterTypes';
import CharacterList from '../components/CharacterList';



export const CharacterView = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectHouse, setSelectHouse] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCaharacters();
        setCharacters(data);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los personajes. Por favor, intenta nuevamente.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleHouseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectHouse(e.target.value)
  }

  const filteredCharacters = selectHouse ? characters.filter(character => character.house === selectHouse) : characters;

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-bold text-hogwarts-blue">
          Cargando datos mágicos...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-bold text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-stone-500 to-stone-700">
      <header className="bg-hogwarts-blue text-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Personajes de Harry Potter</h1>
          <p className="text-center mt-2 text-hogwarts-gold">
            Explora el universo mágico de Harry Potter
          </p>
        </div>
      </header>

      <div className='container mx-auto px-4 py-4'>
        <div className='mb-6'>
            <label htmlFor='house' className='block text-gray-700 font-bold mb-2'>Filtrar por casa:</label>
            <select
                id='house'
                name='house'
                value={selectHouse}
                onChange={handleHouseChange}
                className='block w-full p-2 border border-gray-300 rounded bg-white shadow-sm focus:outline-none focus:border-hogwarts-blue focus:ring focus:ring-hogwarts-blue'
            >
                <option value=''>Todas las casas</option>
                <option value='Gryffindor'>Gryffindor</option>
                <option value='Slytherin'>Slytherin</option>
                <option value='Hufflepuff'>Hufflepuff</option>
                <option value='Ravenclaw'>Ravenclaw</option>
            </select>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <CharacterList characters={filteredCharacters} />
      </div>
    </div>
  );
}

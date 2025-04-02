import React from 'react';
import { Character } from '../types/harryPotterTypes';

interface CharacterListProps {
  characters: Character[];
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  const getHouseColor = (house: string) => {
    switch (house) {
      case 'Gryffindor':
        return 'bg-red-100 border-red-400 text-red-800';
      case 'Slytherin':
        return 'bg-green-100 border-green-400 text-green-800';
      case 'Hufflepuff':
        return 'bg-yellow-100 border-yellow-400 text-yellow-800';
      case 'Ravenclaw':
        return 'bg-blue-100 border-blue-400 text-blue-800';
      default:
        return 'bg-gray-100 border-gray-400 text-gray-800';
    }
  };

  const getStatusColor = (alive: boolean) => {
    return alive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {characters.map((character) => (
        <div
          key={character.id}
          className=" rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-slate-100"
        >
          <div className="p-4">
            <div className="flex items-center mb-4">
              {character.image && (
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150';
                  }}
                />
              )}
              <div>
                <h3 className="text-xl font-bold">{character.name}</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  {character.house && (
                    <span
                      className={`inline-block px-2 py-1 text-xs font-semibold rounded-full border ${getHouseColor(
                        character.house
                      )}`}
                    >
                      {character.house}
                    </span>
                  )}
                  <span
                    className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                      character.alive
                    )}`}
                  >
                    {character.alive ? 'Vivo' : 'Fallecido'}
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-semibold">Especie:</span> {character.species}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Género:</span> {character.gender}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Ascendencia:</span> {character.ancestry}
              </p>
              {character.patronus && (
                <p className="text-gray-600">
                  <span className="font-semibold">Patronus:</span> {character.patronus}
                </p>
              )}
              {character.wizard && (
                <p className="text-gray-600">
                  <span className="font-semibold">Varita:</span> {character.wand.wood}, núcleo de{' '}
                  {character.wand.core} ({character.wand.length} pulgadas)
                </p>
              )}
              {character.actor && (
                <p className="text-gray-600">
                  <span className="font-semibold">Actor:</span> {character.actor}
                </p>
              )}
              {character.alternate_names.length > 0 && (
                <p className="text-gray-600">
                  <span className="font-semibold">Nombres alternativos:</span>{' '}
                  {character.alternate_names.join(', ')}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
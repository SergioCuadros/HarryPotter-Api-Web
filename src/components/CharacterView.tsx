import { useState, useEffect } from "react";
import { getCaharacters } from "../data/hpApi";
import { Character } from "../types/harryPotterTypes";
import CharacterList from "../components/CharacterList";

export const CharacterView = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectHouse, setSelectHouse] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCaharacters();
        setCharacters(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching characters:", error);
        setError(
          "Error al cargar los personajes. Por favor, intenta nuevamente."
        );
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleHouseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectHouse(e.target.value);
  };

  const filteredCharacters = selectHouse
    ? characters.filter((character) => character.house === selectHouse)
    : characters;

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
    <>
      <div className="container mx-auto px-4 py-4">
        <div className="mb-6">
          <select
            className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            id="house"
            name="house"
            value={selectHouse}
            onChange={handleHouseChange}
          >
            <option value="">Todas las casas</option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
          </select>
        </div>
      </div>

      <div className="container mx-auto text-center">
        <CharacterList characters={filteredCharacters} />
      </div>
    </>
  );
};

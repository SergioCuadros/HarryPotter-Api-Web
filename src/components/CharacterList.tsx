import { useState } from "react";
import { Character } from "../types/harryPotterTypes";
import LogoHp1 from "../assets/img/harry-potter-skull-svgrepo-com.svg";
import { Pagination } from "./Pagination";

interface CharacterListProps {
  characters: Character[];
}

const imageUknown = {
  name: "Unknown",
  imgUknown: LogoHp1,
};

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const characterPerPage = 10;

  const indexOfLastCharacter = currentPage * characterPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - characterPerPage;
  const currentCharacters = characters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );
  const tottalPages = Math.ceil(characters.length / characterPerPage);

  const goToNextPage = () => {
    if (currentPage < tottalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getHouseColor = (house: string) => {
    switch (house) {
      case "Gryffindor":
        return "badge badge-soft badge-error";
      case "Slytherin":
        return "badge badge-soft badge-success";
      case "Hufflepuff":
        return "badge badge-soft badge-warning";
      case "Ravenclaw":
        return "badge badge-soft badge-info";
      default:
        return "bg-gray-100 border-gray-400 text-gray-800";
    }
  };

  const getStatusColor = (alive: boolean) => {
    return alive
      ? "badge badge-soft badge-success"
      : "badge badge-soft badge-error";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {currentCharacters.map((character) => (
        <div
          key={character.id}
          className="card card-side bg-base-100 shadow-sm border border-base p-5"
        >
          <div className="avatar">
            <div className="w-24 h-35 rounded-3xl">
              <img
                src={character.image || imageUknown.imgUknown}
                alt={character.name || "Unknown"}
              />
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title text-xl mx-auto mb-5">
              {character.name}
            </h2>
            <p className="text-sm">
              <span className="font-semibold">House:</span>{" "}
              <span className={getHouseColor(character.house)}>
                {character.house || "Unknown"}
              </span>
            </p>
            <p className="text-sm">
              <span className="font-semibold">Specie:</span> {character.species}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Status:</span>{" "}
              <span className={getStatusColor(character.alive)}>
                {character.alive ? "Alive" : "Deceased"}
              </span>
            </p>
            {character.wand && (
              <p className="text-sm">
                <span className="font-semibold">Wand:</span>{" "}
                {character.wand.wood} - {character.wand.core}
              </p>
            )}

            {character.patronus && (
              <p className="text-sm">
                <span className="font-semibold">Patronous:</span>{" "}
                {character.patronus}
              </p>
            )}
          </div>
        </div>
      ))}
      
      <Pagination
        currentPage={currentPage}
        totalPages={tottalPages}
        onNext={goToNextPage}
        onPrevious={goToPreviousPage}
      />
    </div>
  );
};

export default CharacterList;

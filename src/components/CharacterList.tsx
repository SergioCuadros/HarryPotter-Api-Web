import { Character } from "../types/harryPotterTypes";
import  LogoHp1 from "../assets/img/harry-potter-skull-svgrepo-com.svg"

interface CharacterListProps {
  characters: Character[];
}

const imageUknown = {
  name: "Unknown",
 imgUknown: LogoHp1
}
  

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  const getHouseColor = (house: string) => {
    switch (house) {
      case "Gryffindor":
        return "bg-red-100 border-red-400 text-red-800";
      case "Slytherin":
        return "bg-green-100 border-green-400 text-green-800";
      case "Hufflepuff":
        return "bg-yellow-100 border-yellow-400 text-yellow-800";
      case "Ravenclaw":
        return "bg-blue-100 border-blue-400 text-blue-800";
      default:
        return "bg-gray-100 border-gray-400 text-gray-800";
    }
  };

  const getStatusColor = (alive: boolean) => {
    return alive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {characters.map((character) => (
        <div
          key={character.id}
          className="card card-side bg-base-100 shadow-sm"
        >
          <div className="avatar">
            <div className="w-24 h-35 rounded-3xl">
            <img src={character.image || imageUknown.imgUknown} alt={character.name || "Unknown"} />
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title text-xl mx-auto mb-5">{character.name}</h2>
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
    </div>
  );
};

export default CharacterList;

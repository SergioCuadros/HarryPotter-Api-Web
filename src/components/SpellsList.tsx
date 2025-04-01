import { Link } from "react-router-dom";
import { SpellsData } from "../types/harryPotterTypes";


interface SpellsListProps {
    spells: SpellsData[];
}

export const SpellsList: React.FC<SpellsListProps> = ({spells}) => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {spells.map((spell) => (
                    <div key={spell.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
                        <h2 className="text-xl font-bold text-blue-800">{spell.name}</h2>
                        <p className="text-gray-700">{spell.description}</p>
                        <Link to={`/spells/${spell.id}`} className="text-amber-500 hover:underline mt-2 block">
                            Ver detalles
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};

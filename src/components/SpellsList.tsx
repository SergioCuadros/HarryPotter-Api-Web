import { useState } from "react";
import { Pagination } from "./Pagination";
import { SpellsData } from "../types/harryPotterTypes";
import Logo from "../assets/img/magic-wand-wizard-svgrepo-com.svg";

interface SpellsListProps {
  spells: SpellsData[];
}

export const SpellsList: React.FC<SpellsListProps> = ({ spells }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const spellsPerPage = 10;

  const indexOfLastSpells = currentPage * spellsPerPage;
  const indexOfFirstSpells = indexOfLastSpells - spellsPerPage;
  const currentSpells = spells.slice(indexOfFirstSpells, indexOfLastSpells);
  const totalPages = Math.ceil(spells.length / spellsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {currentSpells.map((spell) => (
        <div
          key={spell.id}
          className="card card-side bg-base-100 shadow-sm border border-base p-5"
        >
          <div className="avatar">
            <div className="w-24 h-24 rounded-3xl mx-auto">
              <img
                src={Logo}
                alt={spell.name || "Spell Icon"}
                className="object-contain"
              />
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title text-xl mx-auto mb-5">{spell.name}</h2>
            <p className="text-sm text-center">
              {spell.description || "No description available."}
            </p>
          </div>
        </div>
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={goToNextPage}
        onPrevious={goToPreviousPage}
      />
    </div>
  );
};

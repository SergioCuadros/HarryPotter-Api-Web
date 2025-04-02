import { Link } from "react-router-dom";
import { SpellsData } from "../types/harryPotterTypes";
import Logo from "../assets/img/magic-wand-wizard-svgrepo-com.svg"

interface SpellsListProps {
  spells: SpellsData[];
}

export const SpellsList: React.FC<SpellsListProps> = ({ spells }) => {
  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4  ">
        {spells.map((spell) => (
        <div key={spell.id} className="[--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] w-4/5 h-auto rounded-2xl bg-white [box-shadow:var(--shadow)] max-w-[300px] transition-transform transform hover:scale-105 duration-300 ease-in-out mt-8">
        <div  className="flex flex-col items-center justify-between pt-9 px-6 pb-6 relative">
          <span className="relative mx-auto -mt-16 mb-8"><img src={Logo} alt="" /></span>
          <h5 className="text-sm font-semibold mb-2 text-zinc-700 text-center">
            {spell.name}
          </h5>
          <p className="w-full mb-4 text-sm text-center">
            {spell.description}
          </p>
        </div>
        </div>
      ))}
    </div>

 
  );
};

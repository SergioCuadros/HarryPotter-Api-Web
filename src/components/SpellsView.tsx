import { useEffect, useState } from "react";
import { getSpells } from "../data/hpApi";
import { SpellsData } from "../types/harryPotterTypes";
import { SpellsList } from "./SpellsList";

export const SpellsView = () => {
    const [spells, setSpells] = useState<SpellsData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getSpells();
                setSpells(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching characters:", error);
                setError('Error al cargar los hechizos. Por favor, intenta nuevamente.');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if(loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-2xl font-bold text-hogwarts-blue">
                    Cargando datos mágicos...
                </div>
            </div>
        );
    }

    if(error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-2xl font-bold text-red-600">{error}</div>
            </div>
        );
    }
    return (

            <div className="container mx-auto px-4 py-8">
                <SpellsList spells={spells}/>
            </div>

      );
}

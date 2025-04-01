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
            } catch (err) {
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
        <div className="min-h-screen bg-gradient-to-r from-stone-500 to-stone-700">
            <header className="bg-hogwarts-blue text-white py-6 shadow-md">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center">Hechizos de Harry Potter</h1>
                    <p className="text-center mt-2 text-hogwarts-gold">
                        Explora el universo mágico de Harry Potter
                    </p>
                </div>
            </header>
            <div className="container mx-auto px-4 py-8">
                <SpellsList spells={spells}/>
            </div>
        </div>
      );
}

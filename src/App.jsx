import { useEffect, useState } from "react";
import { fetchPokemons } from "./services/pokemonService";
import PokemonCard from "./components/pokemonCard";
import SearchBar from "./components/searchBar";
import SortByName from "./components/sortByName";
import SortByTypes from "./components/sortByTypes";
import PokemonModal from "./components/pokemonModal";
import Btn from "./components/btn";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("asc");
  const [filterType, setFilterType] = useState("all");
  const [selectedPokemon, setSelectedPokemon] = useState(null); 

  useEffect(() => {
    fetchPokemons().then(setPokemons);
  }, []);

  const filteredPokemons = pokemons 
    .filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((pokemon) =>
      filterType === "all" ? true : pokemon.types.includes(filterType)
    )
    .sort((a, b) =>
      sortBy === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

    const handleAddPokemons = async () => {
      const newPokemons = await fetchPokemons({ offset: pokemons.length });
      setPokemons((prev) => [...prev, ...newPokemons]);
    };

  return (
    <div className="bg-gradient-to-b from-yellow-100 to-pink-100 min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
        Mon Pokédex
      </h1>

      <div className="flex justify-center mb-4">
        
      </div>

      <div className="flex flex-wrap gap-4 justify-center mb-6">
        <SearchBar onSearch={setSearchTerm} />
        <SortByName onSortChange={setSortBy} />
        <SortByTypes onTypeFilter={setFilterType} />
        <Btn onClick={handleAddPokemons}>Ajouter des Pokémon</Btn>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredPokemons.map((pokemon) => (
          <div key={pokemon.id} onClick={() => setSelectedPokemon(pokemon)}>
            <PokemonCard pokemon={pokemon} />
          </div>
        ))}
      </div>

      {selectedPokemon && (
        <PokemonModal
          pokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      )}
    </div>
  );
}

export default App;

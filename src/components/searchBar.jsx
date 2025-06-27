function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Rechercher un Pokémon"
      className="border border-red-300 p-2 rounded shadow"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;

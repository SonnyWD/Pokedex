function PokemonCard({ pokemon }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center hover:scale-105 transition-transform">
      <img src={pokemon.image} alt={pokemon.name} className="mx-auto mb-2 w-20 h-20" />
      <h2 className="font-bold text-xl capitalize text-pink-600">{pokemon.name}</h2>
      <p className="text-sm text-gray-500">#{pokemon.id}</p>
      <div className="flex justify-center mt-2 gap-2">
        {pokemon.types.map((type) => (
          <span
            key={type}
            className="bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded-full"
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;

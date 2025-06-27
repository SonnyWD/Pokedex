function PokemonModal({ pokemon, onClose }) {
  if (!pokemon) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div
        className="bg-white rounded-3xl shadow-2xl border-4 border-yellow-400 p-6 max-w-md w-full relative overflow-hidden"
        style={{
          backgroundImage: 'url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "70%",
          backgroundBlendMode: "soft-light"
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-red-600 text-2xl font-bold"
        >
          ✖
        </button>

        <div className="text-center">
          <img
            src={pokemon.image}
            alt={pokemon.name}
            className="w-40 h-40 mx-auto drop-shadow-xl"
          />
          <h2 className="text-3xl font-bold text-yellow-600 mb-2 capitalize">
            {pokemon.name}
          </h2>
          <p className="text-gray-600 mb-1">ID : #{pokemon.id}</p>

          <div className="flex flex-wrap justify-center gap-2 mb-3">
            {pokemon.types.map((type) => (
              <span
                key={type}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold shadow"
              >
                {type}
              </span>
            ))}
          </div>

          <div className="text-gray-700 text-sm space-y-1">
            <p>Poids : {pokemon.weight} kg</p>
            <p>Taille : {pokemon.height} m</p>
            <p>Expérience : {pokemon.base_experience}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonModal;
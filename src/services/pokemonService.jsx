export async function fetchPokemons({ offset = 0, limit = 50 } = {}) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const data = await response.json();

  const results = await Promise.all(
    data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const details = await res.json();

      return {
        id: details.id,
        name: details.name,
        image: details.sprites.front_default,
        types: details.types.map((types) => types.type.name),
        weight: details.weight / 10,
        height: details.height / 10, 
        base_experience: details.base_experience
      };
    })
  );

  return results;
}

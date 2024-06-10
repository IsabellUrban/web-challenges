import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState({});
  const [nextUrl, setNextUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0"
  );

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(nextUrl);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [nextUrl]);

  return (
    <main>
      <button type="button" onClick={() => setNextUrl(pokemon.previous)}>
        Previous Page
      </button>
      <button type="button" onClick={() => setNextUrl(pokemon.next)}>
        Next Page
      </button>
      <ul>
        {pokemon.results?.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}

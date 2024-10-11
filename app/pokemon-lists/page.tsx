import Link from "next/link";
import React from "react";

const PokemonListPage = async () => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"
  );
  const { results } = await res.json();
  return (
    <div className="p-5">
      <Link className="my-5" href="/">Torna alla Home</Link>
      <h2>Ecco i pokemon</h2>
      <ul className="pl-4">
        {results.map((pokemon: { name: string, url: string}) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonListPage;

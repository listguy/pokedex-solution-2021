import React from "react";

function TypeList({
  pokemonList,
  onPokemonClick,
}) {
  return (
    <div className="list-div">
      <ul>
        {pokemonList.map((pokemon, i) => {
          return (
            <li
              key={`pokemon list item:${i}`}
              onClick={() => {
                return onPokemonClick(pokemon.name);
              }}
            >
              {pokemon.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TypeList;

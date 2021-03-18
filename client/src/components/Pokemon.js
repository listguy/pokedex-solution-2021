import React, { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3001/api";

function Pokemon({ pokemon, setType, inCollection }) {
  const [isCaught, setIsCaught] = useState(false);
  useEffect(async () => {
    if (await inCollection(pokemon.id)) {
      setIsCaught(true);
    } else {
      setIsCaught(false);
    }
  }, [pokemon]);

  useEffect(async () => {
    (async function postingFunction() {
      if (!isCaught || (await inCollection(pokemon.id))) {
        return;
      }
      (async function postPokemon() {
        try {
          await axios.post(`${BASE_URL}/collection/catch`, pokemon);
        } catch (err) {
          console.log(err);
        }
      })();
    })();
  }, [isCaught]);

  useEffect(() => {
    if (isCaught) {
      return;
    }
    (async function postPokemon() {
      try {
        await axios.delete(`${BASE_URL}/collection/release/${pokemon.id}`);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [isCaught]);

  let img = pokemon.sprites.front_default;

  return (
    <div className="details-div">
      <ul>
        <li>Name: {pokemon.name}</li>
        <li>Height: {pokemon.height}</li>
        <li>Weight: {pokemon.weight}</li>
        <li>
          Types:{" "}
          {pokemon.types.map((type, i) => {
            return (
              <span
                key={`type key: ${i}`}
                onClick={() => {
                  setType(type);
                }}
              >
                {type}{" "}
              </span>
            );
          })}
        </li>
      </ul>
      <img
        onMouseOut={(e) =>
          (e.currentTarget.src = `${pokemon.sprites.front_default}`)
        }
        onMouseOver={(e) =>
          (e.currentTarget.src = `${pokemon.sprites.back_default}`)
        }
        src={pokemon.sprites.front_default}
      />
      {pokemon.name ? (
        <button onClick={() => setIsCaught(!isCaught)}>
          {isCaught ? `release` : `catch`}
        </button>
      ) : null}
    </div>
  );
}

export default Pokemon;

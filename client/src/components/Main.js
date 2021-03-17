import React, { useEffect, useState, useRef } from "react";
import Pokemon from "./Pokemon";
import TypeList from "./TypeList";
import axios from "axios";
const BASE_URL = "http://localhost:3001/api";

function Main(props) {
  const [pokemon, setPokemon] = useState({
    name: "",
    height: "",
    weight: "",
    types: [""],
    sprites: {
      back_default: "",
      front_default: "",
    },
  });
  const [isCaught, setIsCaught] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [type, setType] = useState("");
  const [pokemonList, setPokemonList] = useState([]);
  const [isError, setIsError] = useState(false);
  const firstUpdate = useRef(true);

  useEffect(() => {
    (async function getData() {
      const res = await axios.get(`${BASE_URL}/type/${type}`);
      console.log(res.data.pokemons);
      setPokemonList(res.data.pokemons);
    })();
  }, [type]);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    (async function getData() {
      try {
        const res = await axios.get(`${BASE_URL}/pokemon/${pokemonName}`);
        console.log(res.data);
        setPokemon(res.data);
        setIsError(false);
      } catch (err) {
        setIsError(true);
        console.log(err.response.data.message);
      }
    })();
  }, [pokemonName]);

  async function inCollection(id) {
    try {
      const res = await axios.get(`${BASE_URL}/collection/status/${id}`);
      console.log(res.data.status)
      if (res.data.status === "caught") {
         return true; 
      } else {
         return false; 
      }
    } catch (err) {
      return false;
    }
  }
  const clickHandler = () => {
    resetData();
  };
  const resetData = (name = undefined) => {
    setPokemonName(name ? name : userInput);
    setPokemonList([]);
    setType("");
  };

  return (
    <div>
      <input
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        type="text"
      />
      <button type="button" onClick={clickHandler}>
        search pokemon
      </button>
      {isError ? <div>Pokemon not found</div> : null}
      <Pokemon
        isCaught={isCaught}
        setIsCaught={setIsCaught}
        pokemon={pokemon}
        setType={setType}
        inCollection={inCollection}
      />
      <TypeList
        pokemonList={pokemonList}
        onPokemonClick={resetData}
        inCollection={inCollection}
      />
    </div>
  );
}

export default Main;

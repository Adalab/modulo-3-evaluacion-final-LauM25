import "../scss/App.scss";
import CharactersList from "./CharactersList";
import getCharactersFromAPI from "../services/getCharactersFromApi";
import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharactersFromAPI().then((charactersList) => {
      setCharacters(charactersList); // Comprobar que se actualiza la variable de estado users en la pestaña del navegador Components
    });
  }, []); // [] indica que el código del useEffect se ejecute solo una vez al cargar la página

  return (
    <>
      <h1>Rick and Morty</h1>
      <CharactersList charactersData={characters} />
    </>
  );
}

export default App;

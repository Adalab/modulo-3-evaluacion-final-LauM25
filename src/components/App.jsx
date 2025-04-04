import "../scss/App.scss";
import CharactersList from "./CharactersList";
import getCharactersFromAPI from "../services/getCharactersFromApi";
import Filters from "./Filters";
import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    getCharactersFromAPI().then((charactersList) => {
      setCharacters(charactersList); // Comprobar que se actualiza la variable de estado users en la pestaña del navegador Components
    });
  }, []); // [] indica que el código del useEffect se ejecute solo una vez al cargar la página
  const changeName = (valueInput) => {
    setFilterName(valueInput);
  };
  const filteredCharacters = characters.filter((character) => {
    return character.character.toLowerCase().includes(filterName.toLowerCase());
  });

  return (
    <>
      <h1>Rick and Morty</h1>
      <Filters onChangeName={changeName} />
      <CharactersList charactersData={filteredCharacters} />
    </>
  );
}

export default App;

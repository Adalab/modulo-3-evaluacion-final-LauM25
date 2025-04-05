import "../scss/App.scss";
import CharactersList from "./CharactersList";
import getCharactersFromAPI from "../services/getCharactersFromApi";
import Filters from "./Filters";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";
import header from "../images/rick-and-morty.png";

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
  const { pathname } = useLocation();

  const routeData = matchPath("/detail/:id", pathname);

  let idCharacterRoute = undefined;
  if (routeData !== null) {
    idCharacterRoute = parseInt(routeData.params.id);
  }
  //console.log("Este es el routeid" + " " + idCharacterRoute);

  const characterSelected = filteredCharacters.find((character) => {
    return character.id === idCharacterRoute;
  });

  //console.log(characterSelected);

  return (
    <>
      <div className="header">
        <img src={header} alt="Rick and Morty" />
      </div>

      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters onChangeName={changeName} />
                <CharactersList charactersData={filteredCharacters} />
              </>
            }
          />
          <Route
            path="/detail/:id"
            element={<CharacterDetail character={characterSelected} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;

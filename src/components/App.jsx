import "../scss/App.scss"; // Estilos
import CharactersList from "./CharactersList"; // Componente que lista personajes
import getCharactersFromAPI from "../services/getCharactersFromApi"; // Función para obtener datos de la API
import Filters from "./Filters"; // Componente para filtrar por nombre
import { useEffect, useState } from "react"; // Hooks de React
import { Routes, Route, useLocation, matchPath } from "react-router-dom"; // Routing
import CharacterDetail from "./CharacterDetail"; // Componente de detalle
import header from "../images/rick-and-morty.png"; // Imagen del header

function App() {
  const [characters, setCharacters] = useState([]); // Estado: lista de personajes y su actualizador
  // characters → valor actual (inicia como [])
  // setCharacters → función que actualiza ese valor
  const [filterName, setFilterName] = useState(""); // Estado para el filtro por nombre (inicia vacío)

  useEffect(() => {
    // Se ejecuta solo una vez al cargar la app
    getCharactersFromAPI().then((charactersList) => {
      setCharacters(charactersList); // Comprobar que se actualiza la variable de estado users en la pestaña del navegador Components
    });
  }, []); // [] indica que el código del useEffect se ejecute solo una vez al cargar la página
  const changeName = (valueInput) => {
    setFilterName(valueInput); // Actualiza el filtro con lo que escribe el usuario
  };
  const filteredCharacters = characters.filter((character) => {
    // Filtra los personajes por nombre según el texto ingresado
    return character.character.toLowerCase().includes(filterName.toLowerCase());
  });
  const { pathname } = useLocation(); // Obtiene la URL actual

  const routeData = matchPath("/detail/:id", pathname); // Compara la ruta con /detail/:id y extrae el ID si existe

  let idCharacterRoute = undefined;
  if (routeData !== null) {
    idCharacterRoute = parseInt(routeData.params.id); // Convierte el ID de la ruta en número
  }
  //console.log("Este es el routeid" + " " + idCharacterRoute);

  const characterSelected = filteredCharacters.find((character) => {
    // Busca el personaje que coincida con el ID de la URL
    return character.id === idCharacterRoute;
  });

  //console.log(characterSelected);

  return (
    <>
      <div className="header">
        <img src={header} alt="Rick and Morty" />{" "}
        {/* Muestra la imagen del header */}
      </div>

      <main className="main">
        <Routes>
          {/* Ruta principal: muestra filtros + lista de personajes filtrados */}
          <Route
            path="/"
            element={
              <>
                <Filters onChangeName={changeName} />{" "}
                {/* Pasa función para actualizar el filtro */}
                <CharactersList charactersData={filteredCharacters} />{" "}
                {/* Lista de personajes filtrada */}
              </>
            }
          />
          <Route
            path="/detail/:id"
            element={<CharacterDetail character={characterSelected} />} // Muestra el personaje que coincide con el ID
          />
        </Routes>
      </main>
    </>
  );
}

export default App; // Exporta el componente principal de la aplicación

import "../scss/App.scss";
import CharacterCard from "./CharacterCard"; // Importa el componente para mostrar cada personaje individualmente

function CharacterList({ charactersData }) {
  // Recibe por prop la lista de personajes filtrados
  return (
    <section>
      <ul className="characterList">
        {charactersData.map((character) => {
          // Recorre cada personaje en el array
          return (
            // Renderiza un CharacterCard por cada personaje
            // Pasa el personaje individual en la prop charactersData
            // Usa el id del personaje como key para optimizar renderizados
            <CharacterCard charactersData={character} key={character.id} />
          );
        })}
      </ul>
    </section>
  );
}
export default CharacterList; // Exporta el componente para usarlo en App

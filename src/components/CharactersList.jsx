import "../scss/App.scss";
import CharacterCard from "./CharacterCard";

function CharacterList({ charactersData }) {
  return (
    <section>
      <ul className="characterList">
        {charactersData.map((character) => {
          return (
            <CharacterCard charactersData={character} key={character.id} />
          );
        })}
      </ul>
    </section>
  );
}
export default CharacterList;

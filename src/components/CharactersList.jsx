import CharacterCard from "./CharacterCard";

function CharacterList({ charactersData }) {
  return (
    <section>
      <ul>
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

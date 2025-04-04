function CharacterCard({ characterData }) {
  return (
    <li>
      <img src={characterData.urlImage} alt={characterData.character} />
      <h4>{characterData.character}</h4>
      <p>{characterData.species}</p>
    </li>
  );
}
export default CharacterCard;

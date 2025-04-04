function CharacterCard({ charactersData }) {
  return (
    <li>
      <img src={charactersData.urlImage} alt={charactersData.character} />
      <h4>{charactersData.character}</h4>
      <p>{charactersData.species}</p>
    </li>
  );
}
export default CharacterCard;

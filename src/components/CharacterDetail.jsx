import { Link } from "react-router-dom";
function CharacterDetail({ character }) {
  return (
    <>
      <div>
        <Link to="/">
          <p>Volver</p>
        </Link>
        <div>
          <img src={character.urlImage} alt={character.character} />
          <h3>Character:{character.character}</h3>
          <p>Status:{character.status}</p>
          <p>Species:{character.species}</p>
          <p>Origin:{character.origin}</p>
          <p>Episodes:{character.episodes}</p>
        </div>
      </div>
    </>
  );
}
export default CharacterDetail;

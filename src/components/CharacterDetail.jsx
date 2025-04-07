import { Link } from "react-router-dom";
function CharacterDetail({ character }) {
  return (
    <>
      <div>
        <Link to="/">
          <p className="back">
            <i className="fa-solid fa-chevron-left"></i> Back
          </p>
        </Link>
        <div className="cardDetail">
          <img
            className="cardDetail-img"
            src={character.urlImage}
            alt={character.character}
          />
          <div className="cardDetail-txt">
            <h3>Character: {character.character}</h3>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Origin: {character.origin}</p>
            <p>Episodes: {character.episodes}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default CharacterDetail;

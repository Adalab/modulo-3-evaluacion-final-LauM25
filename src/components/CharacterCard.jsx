import { Link } from "react-router-dom";

function CharacterCard({ charactersData }) {
  return (
    <li className="card">
      <Link to={`/detail/${charactersData.id}`}>
        <img src={charactersData.urlImage} alt={charactersData.character} />
        <h4 className="cardTxt">{charactersData.character}</h4>
        <p className="cardTxt">{charactersData.species}</p>
      </Link>
    </li>
  );
}
export default CharacterCard;

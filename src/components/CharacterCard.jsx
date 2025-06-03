import { Link } from "react-router-dom"; // Importa Link para navegación interna sin recargar la página

function CharacterCard({ charactersData }) {
  // Recibe un objeto con los datos del personaje
  return (
    <li className="card">
      <Link to={`/detail/${charactersData.id}`}>
        {" "}
        {/* Link que lleva a la ruta detalle con el ID del personaje */}
        <img src={charactersData.urlImage} alt={charactersData.character} />
        <h4 className="cardTxt">{charactersData.character}</h4>{" "}
        {/* Nombre del personaje */}
        <p className="cardTxt">{charactersData.species}</p>{" "}
        {/* Especie del personaje */}
      </Link>
    </li>
  );
}
export default CharacterCard; // Exporta el componente para usarlo en CharacterList

import { Link } from "react-router-dom"; // Importa Link para navegar sin recargar la página
function CharacterDetail({ character }) {
  // Recibe por prop el objeto con los datos del personaje seleccionado
  return (
    <>
      <div>
        {/* Enlace para volver a la página principal */}
        <Link to="/">
          <p className="back">
            <i className="fa-solid fa-chevron-left"></i> Back
          </p>
        </Link>
        <div className="cardDetail">
          {/* Imagen grande del personaje */}
          <img
            className="cardDetail-img"
            src={character.urlImage}
            alt={character.character}
          />
          {/* Detalles del personaje */}
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
// Exporta el componente para que pueda ser importado y usado en otros archivos, especialmente en el archivo App.js donde se define la ruta "/detail/:id" que renderiza este componente para mostrar los detalles del personaje seleccionado.

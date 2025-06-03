import FilterName from "./FilterName"; // Importa el componente que renderiza el input para filtrar por nombre
function Filters({ onChangeName }) {
  // Recibe una prop llamada onChangeName (función para actualizar el filtro)
  return (
    <>
      <div className="inputContainer">
        {" "}
        {/* Contenedor con clase para aplicar estilos */}
        <FilterName onChangeName={onChangeName} />{" "}
        {/* Pasa la función al subcomponente */}
      </div>
    </>
  );
}
export default Filters; // Exporta el componente para poder usarlo en App

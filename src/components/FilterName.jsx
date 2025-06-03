function FilterName({ onChangeName }) {
  // Recibe la función onChangeName como prop (viene desde App)
  const handleChangeName = (ev) => {
    // Manejador de eventos cuando se escribe en el input
    onChangeName(ev.target.value); // Llama a la función y le pasa el valor escrito por el usuario
    //console.log("Ha hecho click");
  };
  return (
    <div>
      <input
        placeholder="Write the character's name"
        className="input"
        type="text"
        id="name"
        onChange={handleChangeName} // Asocia el evento de cambio con la función que actualiza el filtro
      />
    </div>
  );
}
export default FilterName; // Exporta el componente para poder usarlo en Filters

function FilterName({ onChangeName }) {
  const handleChangeName = (ev) => {
    onChangeName(ev.target.value);
    console.log("Ha hecho click");
  };
  return (
    <div>
      <input type="text" id="name" onChange={handleChangeName} />
    </div>
  );
}
export default FilterName;

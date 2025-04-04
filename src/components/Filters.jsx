function Filters({ onChangeName }) {
  const handleChangeName = (ev) => {
    onChangeName(ev.target.value);
  };
  return (
    <>
      <div>
        <input type="text" id="name" onChangeName={handleChangeName} />
      </div>
    </>
  );
}
export default Filters;

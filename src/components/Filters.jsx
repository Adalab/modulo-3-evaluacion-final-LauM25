import FilterName from "./FilterName";
function Filters({ onChangeName }) {
  return (
    <>
      <div className="inputContainer">
        <FilterName onChangeName={onChangeName} />
      </div>
    </>
  );
}
export default Filters;

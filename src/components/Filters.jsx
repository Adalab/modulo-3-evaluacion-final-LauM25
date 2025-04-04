import FilterName from "./FilterName";
function Filters({ onChangeName }) {
  return (
    <>
      <div>
        <FilterName onChangeName={onChangeName} />
      </div>
    </>
  );
}
export default Filters;

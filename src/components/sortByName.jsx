function SortByName({ onSortChange }) {
  return (
    <select
      className="border border-blue-300 p-2 rounded shadow"
      onChange={(e) => onSortChange(e.target.value)}
    >
      <option value="asc">A-Z</option>
      <option value="desc">Z-A</option>
    </select>
  );
}

export default SortByName;

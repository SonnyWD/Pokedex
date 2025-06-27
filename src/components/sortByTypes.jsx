const types = [
  "all", "grass", "fire", "water", "bug", "normal", "poison", "electric", "ground"
];

function SortByTypes({ onTypeFilter }) {
  return (
    <select
      className="border border-green-300 p-2 rounded shadow"
      onChange={(e) => onTypeFilter(e.target.value)}
    >
      {types.map((type) => (
        <option key={type} value={type}>
          {type === "all" ? "Tous les types" : type}
        </option>
      ))}
    </select>
  );
}

export default SortByTypes;

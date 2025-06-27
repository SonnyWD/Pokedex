function Btn({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600 transition"
    >
      {children}
    </button>
  );
}

export default Btn;

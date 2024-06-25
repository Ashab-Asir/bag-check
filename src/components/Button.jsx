export default function Button({ onClick, type, children }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${type === "secondary" ? "btn--secondary" : ""}`}
    >
      {children}
    </button>
  );
}

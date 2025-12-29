export default function Button({
  children,
  type = "button",
  loading = false,
  fullWidth = true
}) {
  return (
    <button
      type={type}
      disabled={loading}
      className={`btn ${fullWidth ? "btn-full" : ""}`}
    >
      {loading ? "Logging in..." : children}
    </button>
  );
}

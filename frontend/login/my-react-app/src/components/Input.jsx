export default function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = false
}) {
  return (
    <div className="inputGroup">
      {label && <label className="inputLabel">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="inputField"
      />
    </div>
  );
}

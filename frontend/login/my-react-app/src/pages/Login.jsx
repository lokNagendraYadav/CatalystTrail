import { useState } from "react";
import "../styles/login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://edscustomerportel-60060956819.development.catalystserverless.in/server/login_function/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (!data.success) {
        setError("Invalid email or password");
        setLoading(false);
        return;
      }

      // ✅ Login success
      console.log("Logged in user:", data.user);
      alert("Login successful");

    } catch (err) {
      setError("Server not reachable");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      {/* LEFT SIDE – unchanged */}
      <div className="leftSide">
        <div className="overlay">
          <div className="logoSection">
            <h1 className="logo">Enerrgia SKYi</h1>
            <p className="tagline">Channel Partner Portal</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE – YOUR LOGIN UI */}
      <div className="rightSide">
        <div className="formContainer">
          <h2>Welcome Back!</h2>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

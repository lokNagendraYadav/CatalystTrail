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
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // 🔴 VERY IMPORTANT for session cookies
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        throw new Error("Server error");
      }

      const data = await response.json();

      if (!data.success) {
        setError("Invalid email or password");
        setLoading(false);
        return;
      }

      // ✅ LOGIN SUCCESS
      console.log("Logged in user:", data.user);

      // redirect after login
      window.location.href = "/app/dashboard.html";

    } catch (err) {
      console.error(err);
      setError("Server not reachable");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      {/* LEFT SIDE */}
      <div className="leftSide">
        <div className="overlay">
          <div className="logoSection">
            <h1 className="logo">Enerrgia SKYi</h1>
            <p className="tagline">Channel Partner Portal</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="rightSide">
        <div className="formContainer">
          <h2>Welcome Back!</h2>

          {error && <p className="errorText">{error}</p>}

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

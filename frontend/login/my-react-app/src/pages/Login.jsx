import "../styles/login.css";

export default function Login() {
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

      {/* RIGHT SIDE – Catalyst login iframe */}
      <div className="rightSide">
        <div className="formContainer">
          <h2>Welcome Back!</h2>

          <iframe
            title="Catalyst Login"
            src="PASTE_IFRAME_URL_HERE"
            style={{
              width: "100%",
              height: "420px",
              border: "none",
              overflow: "hidden",
            }}
          ></iframe>

        </div>
      </div>
    </div>
  );
}

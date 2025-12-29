const catalyst = require("zcatalyst-sdk-node");

module.exports = async (req, res) => {
  // ✅ Allow requests from your Vercel frontend
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://catalyst-trail.vercel.app"
  );
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  const app = catalyst.initialize(req);

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password required",
      });
    }

    const auth = app.authentication();
    const user = await auth.login(email, password);

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  }
};

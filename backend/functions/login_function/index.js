const catalyst = require('zcatalyst-sdk-node');

module.exports = async (req, res) => {
  const app = catalyst.initialize(req);

  try {
    const { email, password } = JSON.parse(req.body);

    const auth = app.authentication();
    const user = await auth.login(email, password);

    res.status(200).json({
      success: true,
      user
    });

  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message
    });
  }
};

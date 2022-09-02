const getPalanca = async (req, res) => {
  try {
    res.status(200).json({ msg: "recieved" });
  } catch (error) {
    console.log(error);
  }
};

const sendPalanca = async (req, res) => {
  res.json({ msg: "sent" });
};

const login = async (req, res) => {
  res.json({ msg: "logined" });
};

module.exports = { getPalanca, sendPalanca, login };

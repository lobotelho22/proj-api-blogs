const doLogin = (req, res) => {
    try {
        const { email, password } = req.body;
        res.status(200).json({ message: `email: ${email} & password: ${password} ` });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Xiii, algo deu errado...' });
    }
};

module.exports = {
  doLogin,
};

const doLogin = (req, res) => {
    try {
        console.log('teste');
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Xiii, algo deu errado...' });
    }
};

module.exports = {
  doLogin,
};

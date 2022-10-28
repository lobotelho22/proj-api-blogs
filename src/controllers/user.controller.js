const UserService = require('../services/user.service');

const doLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const error = await UserService.checkLogin(email, password);
        if (error.type) { return res.status(400).json({ message: error.message }); }
        
        const userDataVal = await UserService.getByEmailAndPassword(email, password);
        if (userDataVal.type) { return res.status(400).json({ message: userDataVal.message }); }
        
        const userData = userDataVal.message;

        const token = UserService.getToken(userData);

        return res.status(200).json({ token });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Xiii, algo deu errado...' });
    }
};

const createUser = async (req, res) => {
    res.status(200).json({ message: 'Salci-fu-fu' });
};

module.exports = {
  doLogin,
  createUser,
};

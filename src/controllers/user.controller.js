const UserService = require('../services/user.service');

const doLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        let error = await UserService.checkLogin(email, password);
        if (error.type) { return res.status(400).json({ message: error.message }); }
        
        error = await UserService.getByEmailAndPassword(email, password);
        if (error.type) { return res.status(400).json({ message: error.message }); }
        
        return res.status(200).json({ message: `email: ${email} & password: ${password} ` });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Xiii, algo deu errado...' });
    }
};

module.exports = {
  doLogin,
};

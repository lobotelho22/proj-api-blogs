const UserService = require('../services/user.service');

const doLogin = async (req, res) => {
    try {
        const userDataVal = await UserService.getByAttributes(req.body);
        if (userDataVal.type) { return res.status(400).json({ message: 'Invalid fields' }); }
           
        const userData = userDataVal.message;
    
        const token = UserService.getToken(userData);
    
        return res.status(200).json({ token });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Xiii, algo deu errado...' });
    }
};

const createUser = async (req, res) => {
    try {
        const { email } = req.body;
        const emailIsNew = await UserService.getByAttributes({ email });

        if (!emailIsNew.type) return res.status(409).json({ message: 'User already registered' });

        const newUser = await UserService.createUser(req.body);

        const token = UserService.getToken(newUser.dataValues);

        res.status(201).json({ token });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Xiii, algo deu errado...' });   
    }
};

module.exports = {
  doLogin,
  createUser,
};

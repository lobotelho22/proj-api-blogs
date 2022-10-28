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
        console.log(emailIsNew);
        if (!emailIsNew.type) return res.status(409).json({ message: 'User already registered' });

        res.status(201).json({ message: 'Salci-fu-fu' });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Xiii, algo deu errado...' });   
    }
};

module.exports = {
  doLogin,
  createUser,
};

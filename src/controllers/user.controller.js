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

const getAllUsers = async (_req, res) => {
    try {
        const usersList = await UserService.getAll();
        return res.status(200).json(usersList);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Xiii, algo deu errado...' });
    }
};

const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserService.getById(id);
        console.log(user);
        if (!user) return res.status(404).json({ message: 'User does not exist' });

        return res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Xiii, algo deu errado...' });
    }
};

module.exports = {
  doLogin,
  createUser,
  getAllUsers,
  getUser,
};

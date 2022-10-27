const loginValidation = require('./validations/validationLogin');
const { User } = require('../models');

const checkLogin = async (email, password) => {
  if (email && password) {
    const error = await loginValidation.validateLogin(email, password);
    return error;
  }

  return { type: 'REQUIRED_FIELD', message: 'Some required fields are missing' };
};

const getByEmailAndPassword = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  if (!user) return { type: 'REQUIRED_FIELD', message: 'Invalid fields' };
  return { type: null, message: user.dataValues }; 
};

module.exports = {
  checkLogin,
  getByEmailAndPassword,
};

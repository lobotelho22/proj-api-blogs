require('dotenv/config');
const jwt = require('jsonwebtoken');

const { User } = require('../models');

const getByEmailAndPassword = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  if (!user) return { type: 'REQUIRED_FIELD', message: 'Invalid fields' };
  return { type: null, message: user.dataValues }; 
};

const getToken = (userData) => {
  const secret = process.env.JWT_SECRET;
  const jwtConfig = {
    expiresIn: '30d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({
    data: { userId: userData.id, email: userData.email },
    },
    secret,
    jwtConfig);
  console.log(token);
  return token;
};

module.exports = {
  getByEmailAndPassword,
  getToken,
};

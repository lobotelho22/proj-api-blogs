require('dotenv/config');
const jwt = require('jsonwebtoken');

const { User } = require('../models');

const getByAttributes = async (ObjAtributesAndValues) => {
  const user = await User.findOne({ where: { ...ObjAtributesAndValues } });
  if (!user) return { type: 'DATA_NOT_FOUND', message: 'Verify fields\' information' };
  return { type: null, message: user.dataValues };
};

const createUser = async (atributtesAndValues) => {
  const newUser = await User.create(atributtesAndValues);
  return newUser;
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
  createUser,
  getByAttributes,
  getToken,
};

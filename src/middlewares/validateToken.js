const jwt = require('jsonwebtoken');

require('dotenv/config');
const UserService = require('../services/user.service');

const secret = process.env.JWT_SECRET;

const validateToken = async (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) { return res.status(401).json({ message: 'Token not found' }); }

    try {
        const decoded = jwt.verify(token, secret);
        const { userId } = decoded.data;

        const user = await UserService.getByAttributes({ id: userId });

        if (!user) return res.status(401).json({ message: 'Failed to fetch user' });

        req.user = user;

        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = validateToken;
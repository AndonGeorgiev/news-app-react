const User = require('./../models/userModel.js');
const jwt = require('jsonwebtoken');

exports.register = ({ email, password, role }) => User.create({ email, password, role });
exports.getUser = (userId) => User.findById(userId);

exports.login = async({ email, password }) => {
    let user = await User.findOne({ email, password })
    if (user) {
        let accessToken = jwt.sign({ _id: user._id, email: user.email }, 'MOGYSHTSECRET', { expiresIn: '30d' });
        let refreshToken = jwt.sign({ _id: user._id }, 'MOGYSHTSECRET2', { expiresIn: '7d' });

        user.refreshToken = refreshToken;

        await user.save();

        return { user, accessToken, refreshToken };
    } else {
       throw new Error('No such user');
    }
};
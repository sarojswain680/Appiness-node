const User = require('../models/user.model');
const User_roles = require('../models/user_roles.model');

// Create and Save a new User
exports.create = async (req, res) => {

    const { name, phone, email, age } = req.body;
    if (!name) {
        return res.status(400).send({
            message: "User name can not be empty"
        });
    } else if (!phone) {
        return res.status(400).send({
            message: "User phone can not be empty"
        });
    } else if (!email) {
        return res.status(400).send({
            message: "User email can not be empty"
        });
    } else if (!age) {
        return res.status(400).send({
            message: "User age can not be empty"
        });
    }

    const checkUser = await User.find()


    const role = checkUser.length > 0 ? 'End_user' : 'Admin'

    // Create a User
    const user = new User({
        name: name,
        phone: phone,
        email: email,
        age: age
    });

    // Save User in the database
    const newUser = await user.save();

    const userRoles = new User_roles({
        user_id: newUser._id,
        role: role
    })
    const newUserRoles = await userRoles.save()

    res.send(newUserRoles)
};
module.exports = (app) => {
    const user = require('../controllers/controller');

    // Create a new User
    app.post('/user', user.create);

}
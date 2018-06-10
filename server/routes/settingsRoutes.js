module.exports = (app) => {
    const settings = require('../controllers/settingsController.js')

    //get settings
    app.get('/settings', settings.getSettings)
}
const Setting = require('../models/settingsModel')

exports.getSettings = (req, res) => {
    console.log("Getting settings object from mongo...")
    Setting.find()
        .then((settings) => {
            res.send(settings[0])
        })
        .catch((err) => {
            res.status(500).send({
                message: "Couldn't get the settings object!",
                error: err
            })
            throw (err)
        })
}
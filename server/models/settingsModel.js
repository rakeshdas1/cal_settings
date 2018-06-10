const mongoose = require('mongoose')

const SettingsSchema = mongoose.Schema({
    iCalUrl: String,
    dateFmt: String,
    timeFmt: String,
    bgImage: String,
    logo: String,
    limitCalEvs: Number
})

module.exports = mongoose.model('Settings', SettingsSchema)
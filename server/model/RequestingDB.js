const mongoose = require('mongoose');
const RequestingSchema = new mongoose.Schema({
    Counterpartyaddress: {
        type: String,
        required: true,
    },
    Ethereum: {
        type: String,
        required: true
    },
    NFTContract: {
        type: String,
        required: true
    },
    NFTID: {
        type: String,
        required: true
    },
    NFTname: {
        type: String,
        required: true
    },
    NFTDescription: {
        type: String,
        required: true
    },
    NFTImgUrl: {
        type: String,
        required: true
    },
    NFTCount: {
        type: Number,

    }
})
module.exports = mongoose.model('Requesting', RequestingSchema)

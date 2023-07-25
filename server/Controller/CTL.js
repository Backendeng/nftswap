const Offering = require("../model/OfferingDB");
const Requesting = require("../model/RequestingDB");
const bcrypt = require('bcryptjs');

const TradeAdd = async (req, res) => {
    console.log(req.body);

    let Doffering, Drequesting;
    const offering = new Offering({
        Counterpartyaddress: req.body.raddress,
        fakeaddress: req.body.oaddress,
        Ethereum: req.body.oether,
        NFTContract: req.body.oNftAddress,
        NFTID: req.body.onftid,
        NFTname: req.body.oNftName,
        NFTDescription: req.body.oNftDes,
        NFTImgUrl: req.body.oNftImageUrl
    });
    offering.save()
        .then(savedOffering => {
            // Handle success
            Doffering = savedOffering;
            // res.send("Successful!");
            console.log(savedOffering);
            // Return response or perform further actions
        })
        .catch(error => {
            // Handle error
            console.error('Error saving offering:', error);
            // Return response or perform error handling
        });

    const requesting = new Requesting({
        Counterpartyaddress: req.body.raddress,
        Ethereum: req.body.rether,
        NFTContract: req.body.rNftAddress,
        NFTID: req.body.rnftid,
        NFTname: req.body.rNftName,
        NFTDescription: req.body.rNftDes,
        NFTImgUrl: req.body.rNftImageUrl
    });
    requesting.save()
        .then(savedrequesting => {
            // Handle success
            Drequesting = savedrequesting;
            console.log(savedrequesting);
            // Return response or perform further actions
        })
        .catch(error => {
            // Handle error
            console.error('Error saving offering:', error);
            // Return response or perform error handling
        });
    res.send("Successful!")

}

const OfferingDataGet = async (req, res) => {
    // console.log(req.body, "body")
    // console.log(req.body)
    Offering.find({ Counterpartyaddress: req.body.address }).then(Odata => {
        res.send(Odata)
        // console.log("Odata");
    }).catch(err => {
        console.log(err)
    })
}

const RequestingDataGet = async (req, res) => {
    // console.log(req.body)
    Requesting.find({ Counterpartyaddress: req.body.address }).then(Rdata => {
        // console.log(Rdata)
        res.send(Rdata)
        // console.log(Rdata[0].NFTname);
    }).catch(err => {
        console.log(err)
    })
}
module.exports = { OfferingDataGet, RequestingDataGet, TradeAdd }

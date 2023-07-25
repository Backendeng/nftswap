import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, GridList, Typography, TextField } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import NFTSingleCard from './NFTSingleCard';
import "react-notifications/lib/notifications.css"
import { NotificationContainer, NotificationManager } from 'react-notifications';
// grid container style
const GridContainerStyle = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));


const Dashboard = () => {
  //input value
  const [OAddress, setOAddress] = useState('')
  const [OId, setOId] = useState('')
  const [OEthe, setOEthe] = useState(0)
  const [ONFTContract, setONFTContract] = useState('')
  const [ONFTId, setONFTId] = useState('')
  //output value
  const [ONftTokenId, setONftTokenId] = useState('')
  const [ONftAddress, setONftAddress] = useState('')
  const [ONftName, setONftName] = useState('')
  const [ONftDes, setONftDes] = useState('')
  const [ONftImageUrl, setONftImageUrl] = useState('')

  //input value
  const [RAddress, setRAddress] = useState('')
  const [RId, setRId] = useState('')
  const [REthe, setREthe] = useState(0)
  const [RNFTContract, setRNFTContract] = useState('')
  const [RNFTId, setRNFTId] = useState('')
  //output value
  const [RNftTokenId, setRNftTokenId] = useState('')
  const [RNftAddress, setRNftAddress] = useState('')
  const [RNftName, setRNftName] = useState('')
  const [RNftDes, setRNftDes] = useState('')
  const [RNftImageUrl, setRNftImageUrl] = useState('')
  // const [NftData, setNftData] = useState('')
  const HandleChange = (p1, p2) => {
    if (p2 == 1)
      setOAddress(p1)
    else if (p2 == 2) {
      setOEthe(p1)
    }
    else if (p2 == 3) {
      setONFTContract(p1)
    }
    else if (p2 == 4) {
      setONFTId(p1)
    }
    else if (p2 == 5) {
      setRAddress(p1)
    }
    else if (p2 == 6) {
      setREthe(p1)
    }
    else if (p2 == 7) {
      setRNFTContract(p1)
    }
    else if (p2 == 8) {
      setRNFTId(p1)
    }
  }

  const OfferingNFTAdd = () => {
    if (!OAddress || OAddress === undefined) {
      NotificationManager.warning('Invaild Fake Address!', 'Failure');
    }
    else if (!OEthe || OEthe === undefined) {
      NotificationManager.warning('Invaild Ethereum To Offer!', 'Failure');
    }
    else if (!ONFTContract || ONFTContract === undefined) {
      NotificationManager.warning('Invaild NFT Contract!', 'Failure');
    }
    else if (!ONFTId || ONFTId === undefined) {
      NotificationManager.warning('Invaild NFT ID!', 'Failure');
    }
    else if (OAddress && OEthe && ONFTContract && ONFTId) {
      getOfferingNFTInfo(ONFTContract, ONFTId);
    }
    // console.log(ONFTContract, ONFTId)
    // return;
  }
  const RequestingNFTAdd = () => {
    if (!RAddress || RAddress === undefined) {
      NotificationManager.warning('Invaild Cpunterparty Address!', 'Failure');
    }
    else if (!REthe || REthe === undefined) {
      NotificationManager.warning('Invaild Ethereum To Offer!', 'Failure');
    }
    else if (!RNFTContract || RNFTContract === undefined) {
      NotificationManager.warning('Invaild NFT Contract!', 'Failure');
    }
    else if (!RNFTId || RNFTId === undefined) {
      NotificationManager.warning('Invaild NFT ID!', 'Failure');
    }
    else if (RAddress && REthe && RNFTContract && RNFTId) {
      getRequestingNFTInfo(RNFTContract, RNFTId);
    }
    // console.log(RNFTContract, RId)
    // return;
  }

  async function getOfferingNFTInfo(address, id) {
    const apiKey = '3f5ab211b88248fb9c0533c9d8e30481';
    var nftInfo;
    let shortenedtokenid;
    try {
      const response = await axios.get(`https://api.opensea.io/api/v1/asset/${address}/${id}`, {
        headers: {
          'X-API-KEY': apiKey,
        },
      });
      nftInfo = response.data;
      // setNftName()
      // console.log(response.data.name)
      nftInfo.traits.forEach(trait => {
        console.log(trait.trait_type, ':', trait.value);

      });
      if (nftInfo.token_id.length > 3) {
        shortenedtokenid = nftInfo.token_id.slice(0, 3) + "...";
        console.log(shortenedtokenid);
        setONftTokenId(shortenedtokenid);
      }
      else {
        setONftTokenId(nftInfo.token_id)
      }
      setONftName(nftInfo.name)
      setONftDes(nftInfo.description)
      setONftImageUrl(nftInfo.image_url);
      // setONftTokenId(nftInfo.token_id)
      setONftAddress(nftInfo.asset_contract.address.slice(0, 3) + "...")
      NotificationManager.success('Successful!', 'Success');
    } catch (error) {
      console.error('Error retrieving NFT information:', error);
    }
  }
  async function getRequestingNFTInfo(address, id) {
    const apiKey = '3f5ab211b88248fb9c0533c9d8e30481';
    var nftInfo;
    let shortenedtokenid;
    try {
      const response = await axios.get(`https://api.opensea.io/api/v1/asset/${address}/${id}`, {
        headers: {
          'X-API-KEY': apiKey,
        },
      });
      nftInfo = response.data;
      console.log(nftInfo);
      nftInfo.traits.forEach(trait => {
        console.log(trait.trait_type, ':', trait.value);
      });
      if (nftInfo.token_id.length > 3) {
        shortenedtokenid = nftInfo.token_id.slice(0, 3) + "...";
        setRNftTokenId(shortenedtokenid);
      }
      else {
        setRNftTokenId(nftInfo.token_id)
      }
      // setNftData(nftInfo);
      setRNftName(nftInfo.name)
      setRNftDes(nftInfo.description)
      setRNftImageUrl(nftInfo.image_url);
      // setRNftTokenId(nftInfo.token_id)
      setRNftAddress(nftInfo.asset_contract.address.slice(0, 3) + "...")
      NotificationManager.success('Successful!', 'Success');
    } catch (error) {
      console.error('Error retrieving NFT information:', error);
    }
  }
  async function CreateTrade() {
    if (ONftAddress && OEthe && ONftAddress && ONftTokenId && ONftName && ONftDes && ONftImageUrl && RAddress && REthe && RNftAddress && RNftTokenId && RNftImageUrl) (
      await axios.post("/api/trade_add", {
        oaddress: OAddress,
        oether: OEthe,
        oNftAddress: ONftAddress,
        onftid: ONftTokenId,
        oNftName: ONftName,
        oNftDes: ONftDes,
        oNftImageUrl: ONftImageUrl,
        raddress: RAddress,
        rether: REthe,
        rNftAddress: RNftAddress,
        rnftid: RNftTokenId,
        rNftName: RNftName,
        rNftDes: RNftDes,
        rNftImageUrl: RNftImageUrl
      }).then(res => {
        console.log(res.data)
        NotificationManager.success(res.data, 'Success');

      }).catch(err => {
        console.log(err)
      })
    )
    else {
      NotificationManager.warning('Plz do again!', 'Failure');

    }
    // console.log(OAddress, OEthe, ONftAddress, ONftTokenId, ONftName, ONftDes, ONftImageUrl, RAddress, REthe, RNftAddress, RNftTokenId, RNftName, RNftDes, RNftImageUrl);
    // return;

  }
  useEffect(() => {
    // Update the document title using the browser API
    // getOfferingNFTInfo("0x3e38fbe62bd908db58a389863627f6e66ac488a9", 6);
    // getRequestingNFTInfo("0x3e38fbe62bd908db58a389863627f6e66ac488a9", 6);
  });

  return (
    <>
      <NotificationContainer />
      {/* Offering */}
      <GridContainerStyle container spacing={1}>
        {/* 1 */}
        <Grid item xs={12} md={5} lg={4}>
          <Grid style={{ marginLeft: '100px' }} item xs={12} md={12} lg={12}>
            <h1>What You are Offering</h1>
            <h4>This section determines what you are offering in the trade</h4>
          </Grid>
        </Grid>
        {/* 2 */}
        <Grid item xs={12} md={7} lg={7} style={{ marginTop: '28px' }}>
          <Grid item xs={12} md={12} lg={12} style={{ marginBottom: '15px' }}>
            <label style={{ fontSize: '17px' }}>Fake Address</label>
            <TextField
              onChange={(event) => { HandleChange(event.target.value, 1) }}
              style={{ marginTop: '10px' }}
              variant="outlined"
              fullWidth
              type="text"
              label="Fake Address"
              size="small"
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12} style={{ marginBottom: '25px' }} >
            <label style={{ fontSize: '17px' }}>Ethereum To Offer</label>
            <TextField
              onChange={(event) => { HandleChange(event.target.value, 2) }}
              style={{ marginTop: '10px' }}
              variant="outlined"
              fullWidth
              type="text"
              label="Ethereum To Offer"
              size="small"
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12} style={{ marginBottom: '20px' }} container >
            <Grid item grid-column-start="1" xs={2} md={2} lg={2} >
              <label style={{ fontSize: '17px' }}>NFT's to Offer</label>
            </Grid>
            <Grid item xs={8} md={8} lg={8}></Grid>
            <Grid grid-row-gap container item xs={12} md={12} lg={12} spacing={1}>
              <Grid item xs={5} md={5} lg={5}>
                <TextField
                  style={{ marginTop: '10px' }}
                  variant="outlined"
                  fullWidth
                  type="text"
                  label="NFT Contract"
                  size="small"
                  onChange={event => { HandleChange(event.target.value, 3) }}
                />
              </Grid>
              <Grid className="" item xs={5} md={5} lg={5}>
                <TextField
                  style={{ marginTop: '10px' }}
                  variant="outlined"
                  fullWidth
                  onChange={event => { HandleChange(event.target.value, 4) }}
                  type="text"
                  label="NFT ID"
                  size="small"
                />
              </Grid>
              <Grid className="" item xs={1} md={2} lg={2}>
                <Button onClick={OfferingNFTAdd} fullWidth style={{ marginTop: '12px', backgroundColor: 'hsl(18.56deg 98.33% 47.06%)', color: 'white' }}>ADD</Button>
              </Grid>
            </Grid>

          </Grid>
          {ONftTokenId ? <NFTSingleCard flag="offering" imgurl={ONftImageUrl} nfttokenid={ONftTokenId} nftaddress={ONftAddress} /> : ""}

        </Grid>
      </GridContainerStyle>
      <hr />
      {/* Requesting */}
      <GridContainerStyle container spacing={1}>
        {/* 1 */}
        <Grid item xs={12} md={5} lg={4}>
          <Grid style={{ marginLeft: '100px' }} item xs={12} md={12} lg={12}>
            <h1>What You are Requesting</h1>
            <h4>This section determines what you are requesting in the trade</h4>
          </Grid>
        </Grid>
        {/* 2 */}
        <Grid item xs={12} md={7} lg={7} style={{ marginTop: '28px' }}>
          <Grid item xs={12} md={12} lg={12} style={{ marginBottom: '15px' }}>
            <label style={{ fontSize: '17px' }}>Counterparty Address</label>
            <TextField
              onChange={event => { HandleChange(event.target.value, 5) }}
              style={{ marginTop: '10px' }}
              variant="outlined"
              fullWidth
              type="text"
              label="Counterparty Address"
              size="small"
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12} style={{ marginBottom: '25px' }} >
            <label style={{ fontSize: '17px' }}>Ethereum To request</label>
            <TextField
              onChange={event => { HandleChange(event.target.value, 6) }}
              style={{ marginTop: '10px' }}
              variant="outlined"
              fullWidth
              type="text"
              label="Ethereum To request"
              size="small"
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12} container style={{ marginBottom: '20px' }} >
            <Grid item grid-column-start="1" xs={2} md={2} lg={2} >
              <label style={{ fontSize: '17px' }}>NFT's to request</label>
            </Grid>
            <Grid item xs={8} md={8} lg={8}></Grid>
            <Grid item grid-column-end="2" xs={2} md={2} lg={2} >

              <label style={{ fontSize: '17px', marginLeft: '40px' }}>
                <Checkbox
                  // checked={checked}
                  // onChange={handleChange}
                  inputProps={{ 'aria-label': 'controlled' }}
                /> Spoof
              </label>
            </Grid>
            <Grid grid-row-gap container item xs={12} md={12} lg={12} spacing={1}>
              <Grid item xs={5} md={5} lg={5}>
                <TextField
                  style={{ marginTop: '10px' }}
                  variant="outlined"
                  fullWidth
                  type="text"
                  label="NFT Contract"
                  size="small"
                  onChange={event => { HandleChange(event.target.value, 7) }}
                />
              </Grid>
              <Grid className="" item xs={5} md={5} lg={5}>
                <TextField
                  style={{ marginTop: '10px' }}
                  variant="outlined"
                  fullWidth
                  onChange={event => { HandleChange(event.target.value, 8) }}
                  type="text"
                  label="NFT ID"
                  size="small"
                />
              </Grid>
              <Grid className="" item xs={1} md={2} lg={2}>
                <Button onClick={RequestingNFTAdd} fullWidth style={{ marginTop: '12px', backgroundColor: 'hsl(18.56deg 98.33% 47.06%)', color: 'white' }}>ADD</Button>
              </Grid>

            </Grid>

          </Grid>
          {RNftTokenId ? <NFTSingleCard imgurl={RNftImageUrl} nfttokenid={RNftTokenId} nftaddress={RNftAddress} /> : ''}
        </Grid>
      </GridContainerStyle >
      <hr />
      {/* Review Trade */}
      <GridContainerStyle container spacing={1}>
        {/* 1 */}
        <Grid item xs={12} md={5} lg={4}>
          <Grid style={{ marginLeft: '100px' }} item xs={12} md={12} lg={12}>
            <h1>Review Trade</h1>
            <h4>Please carefully review your trade for accuracy</h4>
          </Grid>
        </Grid>

        {/* 2 */}
        <Grid item xs={12} md={7} lg={7} >
          <Grid style={{ marginLeft: '100px' }} item xs={12} md={12} lg={12}>
            <h1>You are offering</h1>
            <h4>You are offering {REthe} Ethereum and 0 NFT's</h4>
            {ONftTokenId ? <NFTSingleCard imgurl={ONftImageUrl} nfttokenid={ONftTokenId} nftaddress={ONftAddress} /> : ''}
            {/* <Grid item xs={12} md={12} lg={12} >
              <div style={{ width: '25%', height: '70%', border: '1px' }}>
                <img sx={{ border: 1 }} src={NftImageUrl} style={{ width: '100%', height: '70%', border: '1px solid black' }} />
                <div style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', marginTop: '-25px' }}>
                  <h4 style={{ paddingTop: '15px', paddingLeft: '17px' }}>{NftTokenId}</h4>
                  <h4 style={{ marginTop: '-13px', paddingLeft: '17px', paddingBottom: '7px' }}>{NftAddress}</h4>
                </div>
              </div>

            </Grid> */}
          </Grid>
          <Grid style={{ marginLeft: '100px' }} item xs={12} md={12} lg={12}>
            <h1>You are requesting</h1>
            <h4>You will get {OEthe} Ethereum and 0 NFT's</h4>
            {RNftTokenId ? <NFTSingleCard imgurl={RNftImageUrl} nfttokenid={RNftTokenId} nftaddress={RNftAddress} /> : ''}
          </Grid>
        </Grid>
      </GridContainerStyle >
      <Grid >
        <Button style={{ marginLeft: '50px', backgroundColor: 'hsl(18.56deg 98.33% 47.06%)', color: 'white' }} onClick={CreateTrade}>CREATE TRADE</Button>
      </Grid>
    </>
  );
};

export default Dashboard;

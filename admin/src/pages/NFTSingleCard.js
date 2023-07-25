import React from 'react';
import axios from 'axios';
import { Grid } from "@material-ui/core";
import { useEffect } from 'react';



const NFTSingleCard = (props) => {
    useEffect(() => {
        console.log(props.imgurl, props.nfttokenid) 
    })
    return (
        <>
            <Grid item xs={12} md={12} lg={12} style={{ marginBottom: '25px' }} >
                <div style={{ width: '25%', height: '70%', border: '1px', }}>
                    <img sx={{ border: 1 }} src={props.imgurl} style={{ width: '100%', height: '70%', border: '1px solid black' }} />
                    <div style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', marginTop: '-25px' }}>
                        <h3 style={{ paddingTop: '15px', paddingLeft: '17px' }}>{props.nfttokenid}</h3>
                        <h3 style={{ marginTop: '-13px', paddingLeft: '17px', paddingBottom: '7px' }}>{props.nftaddress}</h3>
                    </div>
                </div>
            </Grid>
        </>
    )
}
export default NFTSingleCard;
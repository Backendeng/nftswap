import React, { useEffect, useState } from "react";
import Meta from "../../components/Meta";
import Image from "next/image";
import Link from "next/link";
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { Getwalletadd } from '../../redux/counterSlice';
import NFTSingleView from "./NFTSingleView";

const Create = () => {
  const { Walletaddress } = useSelector(
    (state) => state.counter
  );

  console.log(Walletaddress);
  const [ONFTData, setONFTData] = useState([]);
  const [RNFTData, setRNFTData] = useState([]);
  let RData;
  const [Onftflag, setOnftflag] = useState(true)
  const [Cnftflag, setCnftflag] = useState(false)
  const [Rnftflag, setRnftflag] = useState(false)
  const [Mnftflag, setMnftflag] = useState(false)

  const [RNFTEth, setRNFTEth] = useState('');
  const [RNFTName, setRNFTName] = useState('');
  const [RNFTDesc, setRNFTDesc] = useState('');
  const [RNFTImgUrl, setRNFTImgUrl] = useState('');
  const [RNFTkey, setRNFTkey] = useState('');

  const OpenSwaps = () => {
    setOnftflag(true);
    setCnftflag(false);
    setRnftflag(false);
    setMnftflag(false);

  }
  const RecentSwaps = () => {
    setRnftflag(true);
    setOnftflag(false);
    setCnftflag(false);
    setMnftflag(false);

  }
  const CreatSwaps = () => {
    setCnftflag(true);
    setRnftflag(false);
    setOnftflag(false);
    setMnftflag(false);

  }

  const MultipleNFTView = (p1, p2, p3, p4, p5) => () => {
    // alert();
    setRNFTEth(p1);
    setRNFTName(p2);
    setRNFTDesc(p3);
    setRNFTImgUrl(p4);
    setRNFTkey(p5);
    setMnftflag(true);
    setCnftflag(false);
    setRnftflag(false);
    setOnftflag(false);
  }
  async function GetOfferingData() {
    // console.log("getofferingdata")
    if (Walletaddress) {
      try {
        // const response = await axios.post("http://localhost:8000/api/getofferingdata", { address: Walletaddress });
        // console.log(response.data);
        // setONFTData(response.data);
        console.log(ONFTData);
        await axios.post("http://localhost:8000/api/getofferingdata", { address: Walletaddress }).then(res => {
          console.log(res.data)
          RData = res.data
          console.log(res.data[0].NFTID)
        }).catch(err => {
          console.log(err)
        })
        setONFTData(RData);
      } catch (error) {
        console.log(error);
      }
    }
  }
  console.log("ONFTData: ", ONFTData)
  async function GetRequestingData() {
    // console.log("getrequestingdata")
    if (Walletaddress) {
      try {
        await axios.post("http://localhost:8000/api/getrequestingdata", { address: Walletaddress }).then(res => {
          console.log(res.data)
          // setRNFTData(res.data)
          RData = res.data
          console.log(res.data[0].NFTID)
        }).catch(err => {
          console.log(err)
        })
      } catch (err) {
        console.log(err)
      }
      setRNFTData(RData)
      
    }
  }
  console.log("RNFTData: ", RNFTData);
  useEffect(() => {
    GetOfferingData();
    GetRequestingData();
  }, [Walletaddress])

  console.log(RNFTData);

  return (
    <div className="dark:bg-[#200945] mt-12 min-h-[600px]">
      <section className="relative p-24">
        {/* <div className="container"> */}
        <div className="container mb-2 sm:mb-2 px-16">
          <div className="float-left">
            {Onftflag || Mnftflag ? <h1 className="font-display text-jacarta-700 py-5 text-center text-xl font-medium dark:text-white">
              Open Swaps
            </h1> : ""}
            {Rnftflag ? <h1 className="font-display text-jacarta-700 py-5 text-center text-xl font-medium dark:text-white">
              Recent Swaps
            </h1> : ""}
            {Cnftflag ? <h1 className="font-display text-jacarta-700 py-5 text-center text-xl font-medium dark:text-white">
              Create Swaps
            </h1> : ""}
          </div>
          <div className="float-right -mt-5 grid grid-cols-3 py-8 sm:grid-cols-3 gap-1 ">
            <button className="dropdown-toggle text-jacarta-700  flex items-center justify-between py-3.5 px-3 w-full hover:bg-accent focus:bg-accent group rounded-lg dark:hover:bg-accent hover:border-transparent  dark:border-transparent dark:bg-white">
              <span className="flex items-center">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white ">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5.5a2.5 2.5 0 1 0 0 5V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4zm6.085 15a1.5 1.5 0 0 1 2.83 0H20v-2.968a4.5 4.5 0 0 1 0-8.064V5h-9.085a1.5 1.5 0 0 1-2.83 0H4v14h4.085zM9.5 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
                  </svg>
                </span>
                <span style={{ fontSize: '13px', fontFamily: 'circular' }}>
                  Create Swaps
                </span>
              </span>
            </button>
            <button onClick={OpenSwaps} className="dropdown-toggle text-jacarta-700  flex items-center justify-between py-3.5 px-3 w-full hover:bg-accent focus:bg-accent group rounded-lg dark:hover:bg-accent hover:border-transparent  dark:border-transparent dark:bg-white">
              <span className="flex items-center">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white ">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5.5a2.5 2.5 0 1 0 0 5V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4zm6.085 15a1.5 1.5 0 0 1 2.83 0H20v-2.968a4.5 4.5 0 0 1 0-8.064V5h-9.085a1.5 1.5 0 0 1-2.83 0H4v14h4.085zM9.5 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
                  </svg>
                </span>
                <span style={{ fontSize: '13px', fontFamily: 'circular' }}>
                  Open Swaps
                </span>
              </span>
            </button>
            <button onClick={RecentSwaps} className="dropdown-toggle text-jacarta-700  flex items-center justify-between py-3.5 px-3 w-full hover:bg-accent focus:bg-accent group rounded-lg dark:hover:bg-accent hover:border-transparent  dark:border-transparent dark:bg-white">
              <span className="flex items-center">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white ">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5.5a2.5 2.5 0 1 0 0 5V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4zm6.085 15a1.5 1.5 0 0 1 2.83 0H20v-2.968a4.5 4.5 0 0 1 0-8.064V5h-9.085a1.5 1.5 0 0 1-2.83 0H4v14h4.085zM9.5 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
                  </svg>
                </span>
                <span style={{ fontSize: '13px', fontFamily: 'circular' }}>
                  Recent Swaps
                </span>
              </span>
            </button>
          </div>
        </div>
        <div className="container px-20 py-10">

          {Onftflag ? (
            RNFTData.map((item, key1) => (
              <div className="container sm:mt-12 mt-12 lg:mt-12 rounded-lg bg-white" key={key1}>
                <div className="grid md:grid-cols-1 lg:grid-cols-2 grid-cols-2 p-4 sm:grid-cols-1 gap-7">
                  <div className="text-black w-full">
                    <img alt="o1" src={item.NFTImgUrl} width={150} height={300} className="rounded-lg" />
                    <h1 className="text-base">From</h1>
                    <h3>{item.NFTContract}</h3>
                  </div>
                  {ONFTData.map((itm, key2) => (
                    key1 === key2 ? (<div className="text-black w-full">
                      <img alt="o2" src={itm.NFTImgUrl} width={150} height={300} className="rounded-lg" />
                      <h1 className="text-base">From</h1>
                      <h3>{itm.NFTContract}</h3>
                    </div>) : ("")
                  ))}
                </div>
                <div className="p-5">
                  <button className="w-full rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark" onClick={MultipleNFTView(item.Ethereum, item.NFTname, item.NFTDescription, item.NFTImgUrl, key1)}>View</button>
                </div>
              </div>
            ))
          ) : null}

          {Mnftflag ?
            <div className="container sm:mt-12 mt-12 lg:mt-12 rounded-lg" >
              <div>
                <div className="float-left">
                  {ONFTData.map((itm, key) => (
                    key === RNFTkey ? <h1 className="text-xl">From: {itm.fakeaddress}</h1> : ""
                  ))}
                </div>
                <div className="float-right flex items-center px-2 space-x-2">
                  <button className="rounded-lg bg-accent py-2 px-4 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark" style={{ fontFamily: 'circular' }} onClick={OpenSwaps} >Back</button>
                  <button className="w-full rounded-lg bg-accent py-2 px-4 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark" style={{ fontFamily: 'circular' }} >Accept Swap</button>
                </div>
              </div>
              <div className="p-5">
                <hr className="mt-12 text-[#3f3e3e]" />
              </div>
              <div className="container">
                <div>
                  <div className="float-left">
                    <h1 className="text-2xl" style={{ fontFamily: 'CalSans-SemiBold' }}>Requesting</h1>
                  </div>
                  <div className="float-right flex items-center px-2 space-x-2">
                    <h1 className="text-2xl" style={{ fontFamily: 'CalSans-SemiBold' }}>Offering</h1>
                  </div>
                </div>
              </div>
              <NFTSingleView REth={RNFTEth} RName={RNFTName} RDesc={RNFTDesc} RImgurl={RNFTImgUrl} RKey={RNFTkey} />
            </div>
            : ("")}
        </div>

      </section>
    </div>
  );
};

export default Create;

import Image from "next/image";
import Link from "next/link";
import DarkMode from "../mode/DarkMode";
import blackLogo from "./../../public/assets/images/logo1.png";
import WhiteLogo from "./../../public/assets/images/logo.png";
import axios from 'axios';
import Web3 from 'web3';
import { useSelector, useDispatch } from 'react-redux'
import { Getwalletadd } from '../../redux/counterSlice';

import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";
import WalletButton from "../wallet-btn/WalletButton";
import { Modal, Box, Typography } from "@material-ui/core";

export default function Header01() {
  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(false);
  const [isCollapse, setCollapse] = useState(null);
  const [address, setAddress] = useState('');
  const [web3, setWeb3] = useState(null);
  const [open, setOpen] = useState(false);
  const [connected, setConnected] = useState(false);
  // window resize


  const route = useRouter();
  /* -------------------------------------------------------------------------- */
  /*                            daynamic navigations                            */
  /* -------------------------------------------------------------------------- */
  const ConnectWallet = async () => {
    console.log("sss")
    if (window.ethereum) {
      try {
        await window.ethereum.enable();
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new Web3(window.ethereum);
        const accounts = await provider.eth.getAccounts();
        setWeb3(provider);
        setConnected(true);
        setAddress(accounts[0]);
        dispatch(Getwalletadd(accounts[0]))
        // localStorage.setItem('wallet_address', accounts[0])
        // console.log(localStorage.getItem('wallet_address'))
      } catch (error) {
        console.error(error);
      }
      console.log(address)
      setOpen(false)
    }
    else {
      console.error('No Ethereum wallet detected');
      setOpen(false)
    }
  }

  const disconnectWallet = () => {
    dispatch(Getwalletadd(''))
    // localStorage.setItem('acc_address', '')
    // console.log(localStorage.getItem('wallet_address'))
    setAddress(null);
    setWeb3(null);
    setConnected(false);
  };

  const mobileCollapse = (id) => {
    if (isCollapse === id) {
      return setCollapse(null);
    }
    setCollapse(id);
  };
  useEffect(() => {

  })
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        setToggle(false);
      }
    });
  });  
  const handleModalOpen = () => {
    setOpen(true);
  };
  const handleModalClose = () => {
    setOpen(false);
  };
  return <>
    {/* main desktop menu sart*/}
    <header className="js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors">
      <div className="flex items-center px-6 py-6 xl:px-24 ">
        <Link className="shrink-0" href="/" >
          <div className="flex items-center dark:hidden">
            <Image
              src={blackLogo}
              height={200}
              width={60}
              alt="Sano Swap"
            />
            <h1 className=" text-2xl" style={{ fontFamily: 'fantasy' }}>Sano Swap</h1>
          </div>
          <div className="hidden dark:block ">
            <div className="flex items-center">
              <Image
                src={WhiteLogo}
                height={120}
                width={38}
                alt="Sano Swap"
              />
              <h1 className=" text-2xl" style={{ fontFamily: 'fantasy' }}>Sano Swap</h1>
            </div>
          </div>
        </Link>
        {/* End  logo */}

        {/* End Desktop search form */}

        <div className="js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent">
          <nav className="navbar w-full">
            <ul className="flex flex-col lg:flex-row">
              {/* home */}
              <li className="js-nav-dropdown group relative">
                <button className="dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full">
                  <span>Swap </span>
                </button>
              </li>
              {/* page */}
              <li className="js-nav-dropdown group relative">
                <button className="dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full">
                  <span> About </span>
                  <i className="lg:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      className="h-4 w-4 dark:fill-white"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                    </svg>
                  </i>
                </button>
              </li>
              <li className="js-nav-dropdown group relative dark:hidden">
                <button className="dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" fill="#000000" height="20px" width="20px" version="1.1" id="Layer_1" viewBox="0 0 310 310" space="preserve">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                    <g id="SVGRepo_iconCarrier"> <g id="XMLID_826_"> <path id="XMLID_827_" d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73 c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783 c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598 C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467 c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977 c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889 c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597 c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961 c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895 c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367 c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998 C307.394,57.037,305.009,56.486,302.973,57.388z" /> </g> </g>
                  </svg>
                </button>
              </li>
              <li className="js-nav-dropdown group relative hidden dark:block">
                <button className="dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" fill="#f4f0f0" height="20px" width="20px" version="1.1" id="Layer_1" viewBox="0 0 310 310" space="preserve" stroke="#f4f0f0">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                    <g id="SVGRepo_iconCarrier"> <g id="XMLID_826_"> <path id="XMLID_827_" d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73 c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783 c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598 C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467 c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977 c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889 c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597 c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961 c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895 c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367 c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998 C307.394,57.037,305.009,56.486,302.973,57.388z" /> </g> </g>
                  </svg>
                </button>
              </li>
              <li className="js-nav-dropdown group relative">
                {address ? <button onClick={disconnectWallet} className="dropdown-toggle text-jacarta-700 font-display  focus:text-white dark:hover:text-white dark:focus:text-white flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full  hover:bg-accent focus:bg-accent group dark:hover:bg-accent  rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]">
                  Disconnect Wallet
                </button> : <button onClick={handleModalOpen} className="dropdown-toggle text-jacarta-700 font-display  focus:text-white dark:hover:text-white dark:focus:text-white flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full  hover:bg-accent focus:bg-accent group dark:hover:bg-accent  rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]">
                  Connect Wallet
                </button>}  
              </li>
              {/* <li className="js-nav-dropdown group relative">
                <WalletButton />
              </li> */}
            </ul>
          </nav>
          <Modal
            open={open}
            onClose={handleModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{ zIndex: "99999", opacity: "1" }}
          >
            <div
              id="uni_connect_wallet"
              className="uk-modal-full uk-modal uk-open"
              style={{ display: "block" }}
            >
              <div
                className="uk-modal-dialog"
                style={{ backgroundColor: "#1b1128" }}
              >
                <div
                  className="uk-position-top uk-position-z-index-negative"
                  style={{ minHeight: "calc(100vh)" }}
                >
                  <div
                    className="uk-position-cover uk-background-cover uk-opacity-10 dark:uk-hidden"
                    style={{
                      backgroundImage: "url(assets/images/gradient-01.png)",
                    }}
                  ></div>
                  <div
                    className="uk-position-cover uk-background-cover uk-opacity-20 uk-hidden dark:uk-visible"
                    style={{
                      backgroundImage: "url(assets/images/gradient-01.png)",
                    }}
                  ></div>
                </div>
                <button
                  className="uk-modal-close-full uk-close-large uk-position-small"
                  type="button"
                  onClick={handleModalClose}
                >
                  <svg
                    width="20"
                    height="20"
                    color="white"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      fill="none"
                      stroke="white"
                      strokeWidth="1.4"
                      x1="1"
                      y1="1"
                      x2="19"
                      y2="19"
                    ></line>
                    <line
                      fill="none"
                      stroke="white"
                      strokeWidth="1.4"
                      x1="19"
                      y1="1"
                      x2="1"
                      y2="19"
                    ></line>
                  </svg>
                </button>
                <div className="uk-container" >
                  <div
                    className="uk-grid uk-flex-center uk-flex-middle uk-child-width-1-2@m uk-section"
                    style={{ minHeight: "calc(100vh)" }}
                  >
                    <div className="uk-first-column">
                      <div className="uk-panel uk-text-center">
                        <h2 className="uk-h5">
                          Connect your wallet
                        </h2>
                        <div
                          className="uk-grid uk-grid-xsmall uk-grid-small@m uk-child-width-1-2@m uk-margin-medium-top uk-margin-large-top@m" style={{ marginTop: "43px" }}

                        >
                          <div className="uk-first-column ">
                            <div className="uk-panel uk-card-small  uk-card-border   uk-box-shadow-hover-small hover:uk-border-primary" style={{ padding: "32px", borderRadius: "24px" }}>
                              <button
                                
                                className="uk-position-cover"
                                onClick={ConnectWallet}
                              ></button>
                              <Image
                                width={96}
                                height={96}
                                src="assets/images/icon-metamask.svg"
                                alt="metamask"
                                style={{ marginLeft: "35px" }}
                              />
                              <h4 className="uk-text-bold wallet-title uk-margin-small-top uk-margin-medium-top@m" style={{ marginTop: "32px", fontSize: "22px", lineHeight: "1", letterSpacing: "0.02rem" }}>
                                Metamask
                              </h4>
                            </div>
                          </div>
                          <div className="uk-first-column">
                            <div className="uk-panel uk-card-small  uk-card-border   uk-box-shadow-hover-small hover:uk-border-primary" style={{ padding: "32px", borderRadius: "24px" }}>
                              <a
                                href="#bitgo"
                                className="uk-position-cover"
                              ></a>
                              <Image
                                width={96}
                                height={96}
                                src="assets/images/icon-bitgo.svg"
                                alt="bitgo"
                                style={{ marginLeft: "35px" }}
                              />
                              <h4 className="uk-text-bold wallet-title uk-margin-small-top uk-margin-medium-top@m" style={{ marginTop: "32px", fontSize: "22px", lineHeight: "1", letterSpacing: "0.02rem" }}>
                                BitGo
                              </h4>
                            </div>
                          </div>
                          <div className="uk-first-column">
                            <div className="uk-panel uk-card-small  uk-card-border   uk-box-shadow-hover-small hover:uk-border-primary" style={{ padding: "32px", borderRadius: "24px", marginTop: "24px" }}>
                              <a
                                href="#trustwallet"
                                className="uk-position-cover"
                              ></a>
                              <Image
                                width={96}
                                height={96}
                                src="assets/images/icon-trustwallet.svg"
                                alt="trustwallet"
                                style={{ marginLeft: "35px" }}
                              />
                              <h4 className="uk-text-bold wallet-title uk-margin-small-top uk-margin-medium-top@m" style={{ marginTop: "32px", fontSize: "22px", lineHeight: "1", letterSpacing: "0.02rem" }}>
                                Trust Wallet
                              </h4>
                            </div>
                          </div>
                          <div className="uk-first-column">
                            <div className="uk-panel uk-card-small  uk-card-border   uk-box-shadow-hover-small hover:uk-border-primary" style={{ padding: "32px", borderRadius: "24px", marginTop: "24px" }}>
                              <a
                                href="#coinbase"
                                className="uk-position-cover"
                              ></a>
                              <Image
                                width={96}
                                height={96}
                                src="assets/images/icon-coinbase.svg"
                                alt="coinbase"
                                style={{ marginLeft: "35px" }}
                              />
                              <h4 className="uk-text-bold wallet-title uk-margin-small-top uk-margin-medium-top@m" style={{ marginTop: "32px", fontSize: "22px", lineHeight: "1", letterSpacing: "0.02rem" }}>
                                Coinbase
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
          {/* End menu for desktop */}

          <div className="ml-8 hidden items-center lg:flex xl:ml-12">
            {/* End metamask Wallet  */}
            <DarkMode />
          </div>
          {/* End header right content (metamask and other) for desktop */}
        </div>
        {/* header menu conent end for desktop */}
        <div className="ml-auto flex lg:hidden">
          <button className="js-mobile-toggle mr-2 border-jacarta-100 hover:bg-accent dark:hover:bg-accent focus:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]">
            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" fill="#f4f0f0" height="20px" width="20px" version="1.1" id="Layer_1" viewBox="0 0 310 310" space="preserve" stroke="#f4f0f0">
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
              <g id="SVGRepo_iconCarrier"> <g id="XMLID_826_"> <path id="XMLID_827_" d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73 c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783 c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598 C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467 c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977 c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889 c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597 c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961 c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895 c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367 c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998 C307.394,57.037,305.009,56.486,302.973,57.388z" /> </g> </g>
            </svg>
          </button>
          {address ?
            <button onClick={disconnectWallet} className="js-mobile-toggle mr-2 border-jacarta-100 hover:bg-accent dark:hover:bg-accent focus:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]">
              <svg className="dark:fill-white fill-jacarta-base" xmlns="http://www.w3.org/2000/svg" fill="none" height="24" viewBox="0 0 24 24" width="24"><g fill="#292d32"><path d="m19.48 12.95h2.02v-1.44c0-2.06999-1.69-3.76-3.76-3.76h-11.48c-2.07 0-3.76 1.69001-3.76 3.76v6.73c0 2.07 1.69 3.76 3.76 3.76h11.48c2.07 0 3.76-1.69 3.76-3.76v-1.19h-1.9c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6zm-12.88 7.63c-.15.14-.34.21-.53.21s-.38-.07-.53-.21l-.53-.53-.55.55c-.15.15-.34.22-.53.22s-.38-.07-.53-.22c-.29-.29-.29-.77 0-1.06l.55-.55-.53-.53c-.29-.29-.29-.77 0-1.06.3-.29.77-.29 1.07 0l.52.53.5-.51c.3-.29.77-.29 1.07 0 .29.3.29.77 0 1.07l-.51.5.53.52c.29.3.29.77 0 1.07z" opacity=".4" /><path d="m14.85 3.95012v3.79999h-8.59c-2.07 0-3.76 1.69001-3.76 3.75999v-3.66996c0-1.19.73-2.25005 1.84-2.67005l7.94-3c1.24-.46 2.57.45003 2.57 1.78003z" /><path d="m22.5608 13.9702v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6h2.08c.56.02 1 .47 1 1.02z" /><path d="m14 12.75h-7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75z" /><path d="m5 15c-.94 0-1.81.33-2.5.88-.92.73-1.5 1.86-1.5 3.12 0 .75.21 1.46.58 2.06.69 1.16 1.96 1.94 3.42 1.94 1.01 0 1.93-.37 2.63-1 .31-.26.58-.58.79-.94.37-.6.58-1.31.58-2.06 0-2.21-1.79-4-4-4zm-1.58 3.46c-.29-.29-.29-.77 0-1.06.3-.29.77-.29 1.07 0l.52.53.5-.51c.3-.29.77-.29 1.07 0 .29.3.29.77 0 1.07l-.51.5.53.52c.29.3.29.77 0 1.07-.15.14-.34.21-.53.21s-.38-.07-.53-.21l-.53-.53-.55.55c-.15.15-.34.22-.53.22s-.38-.07-.53-.22c-.29-.29-.29-.77 0-1.06l.55-.55z" /></g></svg>
            </button>
            : <button onClick={handleModalOpen} className="js-mobile-toggle mr-2 border-jacarta-100 hover:bg-accent dark:hover:bg-accent focus:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                className="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z" />
              </svg>
            </button>}
          <DarkMode />

        </div>
        {/* End header right content  for mobile */}
      </div>
      {/* End flex item */}
    </header>
    {/* main desktop menu end */}

    {/* start mobile menu and it's other materials  */}

    {/* End mobile menu and it's other materials */}
  </>;
}

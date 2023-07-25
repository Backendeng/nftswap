import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { Getwalletadd } from '../../redux/counterSlice';

const NFTSingleView = (props) => {
    const { Walletaddress } = useSelector(
        (state) => state.counter
    );
    const [ONFTData, setONFTData] = useState([]);

    async function GetOfferingData() {
        console.log("getofferingdata")
        if (Walletaddress) {
            try {
                const response = await axios.post("http://localhost:8000/api/getofferingdata", { address: Walletaddress });
                console.log(response.data);
                setONFTData(response.data);
            } catch (error) {
                console.log(error);
            }
        }
    }
    useEffect(() => {
        GetOfferingData();
    }, Walletaddress)

    return (
        ONFTData.map((itm, key2) => (
            key2 === props.RKey ?
                <div className="container flex items-center text-center px-3 py-4 space-x-28">
                    <div className="grid md:grid-cols-1 lg:grid-cols-2 grid-cols-2 sm:grid-cols-1 gap-7">
                        <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-2 sm:grid-cols-1 gap-7">
                            <div className="dark:bg-white dark:text-white bg-[#c6c2ca] rounded-3xl">
                                <Image alt="n1" className="py-4 px-5 rounded-2xl" src={"/assets/images/ethereum.png"} width={200} height={300} />
                                <div className="px-5 mb-12">
                                    <div className="float-left">
                                        <Link href="" className="text-black text-sm" >
                                            {props.REth}
                                        </Link>
                                    </div>
                                    <div className="float-right mt-3">
                                        <Link href="" className="text-black" >
                                            <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-jacarta-500 dark:fill-jacarta-200">
                                                <circle cx="2" cy="2" r="2"></circle>
                                                <circle cx="8" cy="2" r="2"></circle>
                                                <circle cx="14" cy="2" r="2"></circle>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="px-5">
                                    <h1 className=" mb-3 text-black float-left text-sm">Ethereum</h1>
                                </div>
                            </div>
                            <div className="dark:bg-white dark:text-white bg-[#c6c2ca] rounded-3xl">
                                <img alt="n2" className="py-4 px-5 rounded-2xl" src={props.RImgurl} width={200} height={300} />
                                <div className="px-5 mb-12">
                                    <div className="float-left">
                                        <Link href="" className="text-black text-sm" >
                                            {props.RName}
                                        </Link>
                                    </div>
                                    <div className="float-right mt-3">
                                        <Link href="" className="text-black" >
                                            <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-jacarta-500 dark:fill-jacarta-200">
                                                <circle cx="2" cy="2" r="2"></circle>
                                                <circle cx="8" cy="2" r="2"></circle>
                                                <circle cx="14" cy="2" r="2"></circle>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="px-5">
                                    <h1 className=" mb-3 text-black float-left text-sm">{props.RDesc}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-2 sm:grid-cols-1 gap-7">
                            <div className="dark:bg-white dark:text-white bg-[#c6c2ca] rounded-3xl">
                                <Image alt="n1" className="py-4 px-5 rounded-2xl" src={"/assets/images/ethereum.png"} width={200} height={300} />
                                <div className="px-5 mb-12">
                                    <div className="float-left">
                                        <Link href="" className="text-black text-sm" >
                                            {itm.Ethereum}
                                        </Link>
                                    </div>
                                    <div className="float-right mt-3">
                                        <Link href="" className="text-black" >
                                            <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-jacarta-500 dark:fill-jacarta-200">
                                                <circle cx="2" cy="2" r="2"></circle>
                                                <circle cx="8" cy="2" r="2"></circle>
                                                <circle cx="14" cy="2" r="2"></circle>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="px-5">
                                    <h1 className=" mb-3 text-black float-left text-sm">Ethereum</h1>
                                </div>
                            </div>
                            <div className="dark:bg-white dark:text-white bg-[#c6c2ca] rounded-3xl">
                                <img alt="n4" className="py-4 px-5 rounded-2xl" src={itm.NFTImgUrl} width={200} height={300} />
                                <div className="px-5 mb-12">
                                    <div className="float-left">
                                        <Link href="" className="text-black text-sm" >
                                            {itm.NFTname}
                                        </Link>
                                    </div>
                                    <div className="float-right mt-3">
                                        <Link href="" className="text-black" >
                                            <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-jacarta-500 dark:fill-jacarta-200">
                                                <circle cx="2" cy="2" r="2"></circle>
                                                <circle cx="8" cy="2" r="2"></circle>
                                                <circle cx="14" cy="2" r="2"></circle>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="px-5">
                                    <h1 className=" mb-3 text-black float-left text-sm">{itm.NFTDescription}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : ""
        ))




    )
}

export default NFTSingleView;
import React from "react";
import {
  Hero,
  Bids,
  Top_collection,
  Tranding_category,
  NewseLatter,
  Partners
} from "../../components/component";
import Meta from "../../components/Meta";

const Home_1 = () => {
  return (
    <main className="dark:bg-[#200945]">
      <Meta title="Home 1" />
      <Hero />
      <Partners />
      {/* <Bids /> */}
      {/* <Top_collection /> */}
      {/* <Tranding_category /> */}
      {/* <NewseLatter /> */}
    </main>
  );
};

export default Home_1;

import Head from "next/head";

const Meta = ({ title, keyword, desc }) => {
  return (
    <div className="dark:bg-[#200945]">
      <Head>
        <title>NFT - Swap</title>
        <link rel="icon" href="/assets/images/logo1.png" />
        <meta name="description" content={desc} />
        <meta name="keyword" content={keyword} />
      </Head>
    </div>
  );
};

Meta.defaultProps = {
  title: "Xhibiter | NFT Marketplace Next.js Template",
  keyword:
    "bitcoin, blockchain, crypto, crypto collectibles, crypto makretplace, cryptocurrency, digital items, market, nft, nft marketplace, nft next js, NFT react, non-fungible tokens, virtual asset, wallet",
  desc: "The world's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.",
};

export default Meta;

import Image from "next/image";
import Link from "next/link";

const hero = () => {
  return (
    <section className="relative pb-10 pt-20 md:pt-32 h-1527 dark:bg-[#200945] ">
      <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 block dark:hidden h-full">
        <Image
          width={1519}
          height={760}
          src="/images/gradient.jpg"
          alt="gradient"
          className="h-full w-full object-cover"
        />
      </picture>
      <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
        <Image
          width={1519}
          height={760}
          src="/images/gradient_dark.jpg"
          alt="gradient dark"
          className="h-full w-full object-cover"
        />
      </picture>

      <div className="container h-full mx-auto">
        <div className="grid h-full items-center gap-4 md:grid-cols-12">
          <div className="col-span-6 flex h-full flex-col items-center justify-center py-10 md:items-start md:py-20 xl:col-span-4">
            <h1 className="text-jacarta-700 font-bold font-display mb-6 text-center dark:text-white md:text-left text-xl">
              Swap your NFTs in a safe and secure way, your way!
            </h1>
            <p className="dark:text-jacarta-200 mb-8 text-center text-lg md:text-left">
              Sano Swap provides a secure escrow to let you swap your NFTs with others. At no point in time does sano or anyone else have access to your NFTs or funds.
            </p>
            <div className="flex">
              <Link
                href="/create"
              >
                <button className="flex items-center rounded-3xl bg-gradient-to-br from-[#FC00FF] via-[#504CF3] to-[#02FFD1] px-5 py-4 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#504CF3]/50">
                  Swap Now
                  <svg className="ml-2 mt-1 w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>


          {/* <!-- Hero image --> */}
          <div className="col-span-6 xl:col-span-8">
            <div className="relative text-center md:pl-8 md:text-right">
              <Image
                width={560}
                height={560}
                src="/assets/images/features.png"
                alt="hero"
                className=" mt-8 inline-block w-72  sm:w-full lg:w-[24rem] xl:w-[35rem]"
              />
              <Image
                width={740}
                height={602}
                src="/images/hero/3D_elements.png"
                alt="floating image"
                className="animate-fly absolute top-0 md:-right-[10%] "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;

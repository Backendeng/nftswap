import Link from "next/link";
import { footerMenuList, socialIcons } from "../data/footer_data";
import Image from "next/image";

const footer = () => {
  return (
    <>
      {/* <!-- Footer --> */}

      <footer className="dark:bg-[#200945] page-footer bg-white">

        <div className="container ">
          <div className='text-center mb-8'>
            <hr style={{ color: '#474b47' }} />
          </div>
          <div className="container">
            <div className="float-left">
              <h5 className=" text-sm" style={{ color: 'rgb(190 190 190)', fontFamily: 'circular' }}>© 2023 Sano Swap. All rights reserved.</h5>
            </div>
            <div className="float-right">
              <div className="flex items-center space-x-4 font-['circular]">
                <Link href="" className="inline-block text-sm" >
                  Privacy policy
                </Link>
                <Link href="" className="inline-block text-sm" >
                  Terms of use
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between space-y-2 py-8 sm:flex-row sm:space-y-0">
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
